import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { List, Form, Header, Button, Container, Grid, Image } from 'semantic-ui-react';
// import { addTeams } from '../../../actions/team';
import { required } from 'redux-form-validators';
import mascots from '../../../static/mascots';

let sourceImg;
function CreateTeam(props) {
  const { handleSubmit } = props;
  if (props.createteam && props.createteam.values && props.createteam.values.mascotIMG) {
    console.log(props.createteam.values.mascotIMG);
    sourceImg = props.createteam.values.mascotIMG;

  }
  // console.log(mascots)
  return (
    <Container textAlign='left' >
      <Form size='large' onSubmit={handleSubmit(props.onSubmit)} style={{ marginRight: 30, marginLeft: 30 }}>
        <Header>
          Start your Dream Team, create a team today!
          </Header>
        <List as='ol' color='black'>
          <List.Item as='li' value='*'>
            Every team can only have up to 5 members.
          </List.Item>
          <List.Item as='li' value='*'>
            Get to your goal by logging in the distance and duration of your runs.
          </List.Item>
          <List.Item as='li' value='*'>
            All exercise must be intentional exercise (Steps walked during you normal day do not count!)
          </List.Item>
        </List>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3'> Team Name: </Header>
              <Field
                name='name'
                component={props.renderInput}
                // label='Team Name'
                placeholder='The Lobsters...'
                style={{ width: '300' }}
                validate={
                  [
                    required({ msg: 'You must provide a team name!' })
                  ]
                }
              />
            </Grid.Column>
            <Grid.Column width={5}>
              <Header as='h3'> Team Mascot: </Header>
              <Field name='mascotIMG' component='select' width='100px'>
                <option value='snake'>Snake  </option>
                <option value='tiger'>Tiger </option>
                <option value='turtle'>Turtle </option>
                <option value='cow'>Cow</option>
                <option value='crocodile'>Crocodile </option>
                <option value='elephant'>Elephant</option>
                <option value='monkey'>Monkey</option>
                <option value='poodle'>Poodle</option>
                <option value='rabbit'>Rabbit</option>
                <option value='ram'>Ram </option>
              </Field>
              </Grid.Column>
              <Grid.Column width={3}>
              {sourceImg && <img src={mascots[`${sourceImg}`]} alt='mascot'  width='80px'/>}
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <Header> Do you want this to be a private or public team?  </Header>
              <label><Field name='teamType' component='input' type='radio' value='private' /> Private </label>
              <label><Field name='teamType' component='input' type='radio' value='public' /> Public</label>
              {/* ES2020 Optional Chaining */}
              {props.createteam?.values?.teamType === 'private' &&
                <Field
                  name='passcode'
                  type='password'
                  placeholder='Passcode...'
                  component={props.renderInput}
                  label='For private teams, please enter a passcode for people to join your team'
                />}
            </Grid.Column>

            <Grid.Column width={6} textAlign='right' verticalAlign='bottom'>

              <Button type='submit'>Submit</Button>
              <Button onClick={props.resetView}>Go Back</Button>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Form>
    </Container >
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
