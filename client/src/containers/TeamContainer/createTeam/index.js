import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { List, Form, Header, Button, Container, Image, Grid, Radio } from 'semantic-ui-react';
import { addTeams } from '../../../actions/team';
import { required } from 'redux-form-validators';
import mascots from "../../../static/mascots";

function CreateTeam (props) {
  const { handleSubmit } = props;
  if ( props.createteam && props.createteam.values) {
    console.log(props.createteam.values);
  }
    // console.log(mascots)
    return (
      <Container textAlign='left'>
        <Form size='large' onSubmit={handleSubmit(props.onSubmit)}>
          <Header>
            Create a Team!
          </Header>
          <List as='ol'>
            <List.Item as='li' value='*'>
              Every team can only have up to 5 members.
            </List.Item>
          </List>
          <Field 
            name='name' 
            component={props.renderInput}
            label='Team Name'
            placeholder='The Lobsters...'
            validate={
              [
                required({ msg: 'You must provide a team name!'})
              ]
            }
          />
          <Form.Group grouped>
            <label>Team Mascot</label>
            <Grid>
              <Grid.Row>
              <Field name ="mascotIMG" component='select' >
                  <option value="snake">Snake  </option>
                  <option value="tiger">Tiger </option>
                  <option value="turtle">Turtle </option>
              </Field>
              {/* <img src = {mascots.value.src}/> */}
                  {/* <Button>
                    <Field name="mascotIMG" component='select' value = 'snake'/>
                      Snake
                      <img src={mascots.snake.src} alt='snake'/>
                  </Button>
                  <Button>
                    Tiger
                    <img src={mascots.tiger.src} alt='tiger'/>
                  </Button>
                  <Button>
                    Turtle
                    <img src={mascots.turtle.src} alt='turtle'/>
                  </Button> */}
              </Grid.Row>
            </Grid>
          </Form.Group>

          <Form.Group grouped>
            <label>Do you want this to be a private or public team? </label>
            <label><Field name="teamType" component='input' type="radio" value="private" /> Private </label>
            <label><Field name="teamType" component='input' type="radio" value="public" /> Public</label>
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

          <Button type='submit'>Submit</Button>
          
          <Button onClick={props.resetView}>Go Back</Button>
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
