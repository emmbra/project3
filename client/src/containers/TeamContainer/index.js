import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";

// import {
//   ADD_TEAMS,
//   ADD_TEAMS_ERROR,
//   ADD_USER_TO_TEAM,
//   ADD_USER_TO_TEAM_ERROR,
// } from '../types';
// import axios from 'axios';

import CreateTeam from "./CreateTeam";
import JoinTeam from "./JoinTeam";

class TeamContainer extends Component {
  state = {
    currentPage: "teamsignup",
  };
  // addUserToTeam = async (formValues, dispatch) => {
  //   try {
  //     await axios.post(`/api/team/${teamId}`, formValues, { headers: { 'authorization': localStorage.getItem('token')}});
  //     dispatch({ type: ADD_USER_TO_TEAM });
  //     // this.props.getUserTodos();
  //   } catch (e) {
  //     dispatch({ type: ADD_USER_TO_TEAM_ERROR, payload: 'You must provide texta user' });
  //   }
  // }
  handlePageChangeCreateTeam = (page) => {
    this.setState({ currentPage: "createTeam" });
  };

  handlePageChangeJoinTeam = (page) => {
    this.setState({ currentPage: "joinTeam" });
  };

  renderPage = () => {
    switch (this.state.currentPage) {
      // case 'teamsignup':
      //   return '<TeamContainer />';
      case "createTeam":
        return <CreateTeam />;
      case "joinTeam":
        return <JoinTeam />;
      default:
        break;
    }
  };

  render() {
    console.log("HELLO");
    console.log(this.props);
    return (
      <Grid
        // textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 700 }}>
          <Button
            size='big'
            content="Create Team"
            onClick={(e) => this.handlePageChangeCreateTeam(e)}
          />
          <Button
            size='big'
            content="Join Team"
            onClick={(e) => this.handlePageChangeJoinTeam(e)}
          />
        </Grid.Column>
        {this.renderPage()}
      </Grid>
    );
  }
}

export default TeamContainer;
