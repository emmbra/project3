import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Segment,
} from 'semantic-ui-react';
import {
  ADD_TEAMS,
  ADD_TEAMS_ERROR,
  ADD_USER_TO_TEAM,
  ADD_USER_TO_TEAM_ERROR,
} from '../types';
import axios from 'axios';

class TeamContainer extends Component {

  onSubmitCreateTeam = async (formValues, dispatch) => {
    try {
      await axios.post('/api/team', formValues, { headers: { 'authorization': localStorage.getItem('token') }});
      dispatch({ type: ADD_TEAMS });
    } catch (error) {
      dispatch({ type: ADD_TEAMS_ERROR, payload: 'Error: cannot create team!' })
    }
  }

  onSubmitAddUserToTeam = async (formValues, dispatch) => {
    try {
      await axios.post('/api/team', formValues, { headers: { 'authorization': localStorage.getItem('token') }});
      dispatch({ type: ADD_USER_TO_TEAM });
    } catch (error) {
      dispatch({ type: ADD_USER_TO_TEAM_ERROR, payload: 'Error: cannot add user to team!' })
    }
  }

  render() {
    console.log("HELLO");
    console.log(this.props);
    return (
      <Segment placeholder>
      <Grid columns={2} stackable textAlign='center'>
        <Divider vertical>Or</Divider>
        <Grid.Row verticalAlign='middle'>
          <Grid.Column>
            <Button 
            as={Link}
            to='/createteam'
            icon='users'
            size='huge'
            color='teal'
            content="Create Team"
            createTeam={this.props.onSubmitCreateTeam}
              />
          </Grid.Column>
            <Grid.Column>
            <Button 
            as={Link}
            to='/jointeam'
            icon='add user'
            size='huge'
            color='teal' 
            content="Join Team"
            addUserToTeam={this.props.onSubmitAddUserToTeam}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    );
  }
}

export default TeamContainer;
