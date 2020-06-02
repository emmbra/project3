import React from 'react';
import { Header, List, Button, Popup, Form, Segment, Divider, Icon, Grid, Table } from 'semantic-ui-react';
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
      <Table.Body>
        <Table.Cell>
          <Form.Input
            {...input}
            error={meta.error || meta.valid}
          />
        </Table.Cell>
        <Table.Cell>
          <Popup
            on='click'
            position='top right'
            content='Enter a passcode for this team.'
            trigger={
              <Button
                icon='add'
                size='small'
                onClick={(event) => props.handleUpdate(event, teamid, input.value, () => {
                  console.log('Called');
                  props.history.push('/dashboard');
                })
                }
              />
            }
          />
        </Table.Cell>
      </Table.Body>
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
            <Table.Body collapsing>
              {/* <Table.Cell> */}
                <Table.Cell width={1}><Icon  name='lock open' /></Table.Cell>
                <Table.Cell width={10}>
                  <label>{name}</label>
                </Table.Cell>
                <Table.Cell width={2}><img src={mascots[`${mascotIMG}`]} alt='mascot' width='30px' /></Table.Cell>
                <Table.Cell width={3} style = {{float:'right'}}><Popup

                  on='click'
                  position='top right'
                  content='Join this team!'
                  trigger={
                    <Button
                      icon='add'
                      size='small'
                      onClick={(event) => props.handleUpdate(event, _id, null, () => {
                        console.log('Called');
                        props.history.push('/dashboard');
                      })
                      }
                    />
                  }
                />
                </Table.Cell>
              {/* </Table.Cell> */}
            </Table.Body>
          )
        } else
          return (
            <Table.Body collapsing>
              {/* <Table.Cell> */}
                <Table.Cell><Icon name='lock' /></Table.Cell>
                <Table.Cell><label>{name}</label></Table.Cell>
                <Table.Cell><img src={mascots[`${mascotIMG}`]} alt ='mascot' width='30px' /></Table.Cell>
                <Table.Cell><Field name={name} teamid={_id} component={renderInput} type='text' placeholder='Passcode' /></Table.Cell>
              {/* </Table.Cell> */}
            </Table.Body>
            //     </List.Item>
            //   </Grid.Column>
            // </Grid>
            // <Button onClick={props.resetView}>Go Back</Button> 
          )
      }
    )
  }
}
export default withRouter(reduxForm({ form: 'JoinTeam' })(JoinTeam));