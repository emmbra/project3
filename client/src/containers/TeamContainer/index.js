import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react'

// import {
//   ADD_TEAMS,
//   ADD_TEAMS_ERROR,
//   ADD_USER_TO_TEAM,
//   ADD_USER_TO_TEAM_ERROR,
// } from '../types';
// import axios from 'axios';

import createTeam from './createTeam';
import joinTeam from './joinTeam';

class TeamContainer extends Component {
  // addUserToTeam = async (formValues, dispatch) => {
  //   try {
  //     await axios.post(`/api/team/${teamId}`, formValues, { headers: { 'authorization': localStorage.getItem('token')}});
  //     dispatch({ type: ADD_USER_TO_TEAM });
  //     // this.props.getUserTodos();
  //   } catch (e) {
  //     dispatch({ type: ADD_USER_TO_TEAM_ERROR, payload: 'You must provide texta user' });
  //   }
  // }
  
  render() {
    console.log("HELLO");
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 700 }}>
          <Button as={Link} to={createTeam} content='Create Team'/>
          <Button as={Link} to={joinTeam} content='Join Team'/>
        </Grid.Column>
      </Grid>
    )
  }
}


export default TeamContainer;
