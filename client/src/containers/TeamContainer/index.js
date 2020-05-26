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
  // handlePageChange = (page) => {
  //   this.setState({ currentPage: page });
  // };

  // renderPage = () => {
  //   switch (this.state.currentPage) {
  //     case "createTeam":
  //       return <CreateTeam />;
  //     case "joinTeam":
  //       return <JoinTeam />;
  //     default:
  //       break;
  //   }
  // };

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
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>


      // <Grid
      //   // textAlign="center"
      //   style={{ height: "100vh" }}
      //   verticalAlign="middle"
      // >
      //   <Grid.Column style={{ maxWidth: 700 }}>
      //     <Button
      //       size='big'
      //       content="Create Team"
      //       onClick={() => this.handlePageChange('createTeam')}
      //     />
      //     <Button
      //       size='big'
      //       content="Join Team"
      //       onClick={() => this.handlePageChange('joinTeam')}
      //     />
      //   </Grid.Column>
      //   {this.renderPage()}
      // </Grid>
    );
  }
}

export default TeamContainer;
