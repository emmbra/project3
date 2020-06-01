import React from 'react';
import { Header, List, Button, Popup, Form, Segment, Divider, Icon} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import mascots from '../../../static/mascots';
// Make sure handleUpdate is passed in parent container
// handleUpdate='{this.props.updateCompleteUserTodoById}

function JoinTeam(props) {
  // const { handleSubmit } = props;
  // console.log(props);
  const renderInput = ({ input, meta, teamid }) => {
    // console.log(input)
    // console.log(teamid);
    return (
      <>
        <Form.Input className='inlineItem'
          {...input}
          error={meta.error || meta.valid}
        />
        <Popup className='inlineItem'
          on='click'
          position='top right'
          content='Enter a passcode for this team.'
          trigger={
            <Button
              icon='add'
              // color='green'
              size='small'
              onClick={(event) => props.handleUpdate(event, teamid, input.value, () => {
                console.log('Called');
                props.history.push('/dashboard');
              })
              }
            />
          }
        />
      </>
    )
  }
  // console.log(props);
  if (props.teams.length === 0) {
    return <Header content='There are no teams yet.' />;
  } else {
    return props.teams.map(
      ({ _id, name, mascotIMG, teamType, teamStatus, passcode, users }) => {
      
        if (teamType === 'public') {
          return (
            <Segment key={_id} teamid={_id} id='joinTeamContainers'>
              <List>
                <List.Item>
                  <List.Content className='inlineItem'>
                    <Header>{name}</Header>
                    <Icon name = 'lock open' />
                    {/* <img src={mascots[`${mascotIMG}`]} alt='mascot'  width='30px'/> */}
                    {/* <p>
                        {teamType}
                        {name}
                        {mascotIMG}
                      </p> */}
                  </List.Content>
                  <List.Content className='inlineItem'>
                    <Popup
                      on='click'
                      position='top right'
                      content='Join this team!'
                      trigger={
                        <Button
                          icon='add'
                          // color='green'
                          size='small'
                          onClick={(event) => props.handleUpdate(event, _id, null, () => {
                            console.log('Called');
                            props.history.push('/dashboard');
                          })
                          }
                        />
                      }
                    />
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
          )
        } else
          return (
            <Segment key={_id} teamid={_id} id='joinTeamContainers'>
              {/* <Divider
                as='h2'
                className='header'
                horizontal
                style={{ color: '#ca50a1', margin: '1em 0em', textTransform: 'uppercase' }}
              >
                Private Teams
              </Divider> */}
              <List.Item id='inlineItem'>
                <List.Content id='inlineItem'>
                  <Header id='inlineItem'>{name}</Header>
                  <Icon name = 'lock' />
                    {/* <img src={mascots[`${mascotIMG}`]} alt='mascot'  width='30px'/> */}
                  {/* {name}
                    {mascotIMG} */}
                </List.Content>
                <List.Content id='inlineItem'>
                  <Field name={name} teamid={_id} component={renderInput} type='text' placeholder='Passcode' />
                </List.Content>
              </List.Item>
              {/* // <Button onClick={props.resetView}>Go Back</Button>  */}
            </Segment>
            // <Button onClick={props.resetView}>Go Back</Button> 
          )
      }
      )
  }

}


export default withRouter(reduxForm({ form: 'JoinTeam' })(JoinTeam));
