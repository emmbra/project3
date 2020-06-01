import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { List, Form, Header, Button, Container,  Grid} from 'semantic-ui-react';
import { addTeams } from '../../../actions/team';
import { required } from 'redux-form-validators';
import mascots from '../../../static/mascots';

let sourceImg;
function CreateTeam (props) {
  const { handleSubmit } = props;
  if ( props.createteam && props.createteam.values && props.createteam.values.mascotIMG ) {
    console.log(props.createteam.values.mascotIMG);
    sourceImg = props.createteam.values.mascotIMG;
    }
  
    // console.log(mascots)
    return (
      <Container textAlign='left'>
        <Form size='large' onSubmit={handleSubmit(props.onSubmit)}>
          <Header>
            Start your Dream Team, create a team today!
          </Header>
          <List as='ol' color = 'black'>
            <List.Item as='li' value='*'>
            <Header as='h5'>Every team can only have up to 5 members. </Header>
            </List.Item>
            <List.Item as='li' value='*'>
            <Header as='h5'>Get to your goal by logging in the distance and duration of your runs. </Header>
            </List.Item>
          </List>
          <Header> Team Name: </Header>
          <Field 
            name='name' 
            component={props.renderInput}
            // label='Team Name'
            placeholder='The Lobsters...'
            width = '100px'
            validate={
              [
                required({ msg: 'You must provide a team name!'})
              ]
            }
          />
          <Form.Group grouped>
          <Header> Team Mascot: </Header>
            {/* <label>Team Mascot</label> */}
            <Grid>
              <Grid.Row>
              <Field name ='mascotIMG' component='select' width='100px'>
                  <option value='snake'>Snake  </option>
                  <option value='tiger'>Tiger </option>
                  <option value='turtle'>Turtle </option>
              </Field>
              <img src={mascots[`${sourceImg}`]}  alt='mascot'/>
              <img src={mascots.snake.src} alt='snake' width = '50px'/>
              {/* {RenderImg()} */}
              </Grid.Row>
            </Grid>
          </Form.Group>

          <Form.Group grouped>
          <Header> Do you want this to be a private or public team?  </Header>
            {/* <label>Do you want this to be a private or public team? </label> */}
            <label><Field name='teamType' component='input' type='radio' value='private' /> Private </label>
            <label><Field name='teamType' component='input' type='radio' value='public' /> Public</label>
            {/* ES2020 Optional Chaining */}
            { props.createteam?.values?.teamType === 'private' && 
            <Field 
              name='passcode' 
              type='password' 
              placeholder='Passcode...' 
              component={props.renderInput} 
              label = 'For private teams, please enter a passcode for people to join your team'
            />}
          </Form.Group>

          <Button type='submit' color='#34c4f8'>Submit</Button>
          
          <Button onClick={props.resetView} color='#34c4f8'>Go Back</Button>
        </Form>
      </Container>
    )
  }

  function mapStateToProps(state) {
    return {
      createteam: state.form['CreateTeam'],
    };
  }
  
export default compose(
  connect(mapStateToProps, {}),
  reduxForm({ form: 'CreateTeam' })
)(CreateTeam);
