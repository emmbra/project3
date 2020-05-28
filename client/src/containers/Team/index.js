import React, { Component } from "react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Segment, Dropdown, Button, Header, Form, Icon, Container, Grid, List} from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";

import { getTeamUsers } from '../../actions/team';

class Team extends Component {
  getTeamList = () => {
    if (this.props.getUserTeams?.length === 0) {
      return <Header content="No teams found!" />;
    } else {
      return this.props.getUserTeams?.map(({ name }) => {
        return <option value={name}>{name}</option>;
      });
    }
  };

  renderUsersByTeamId = (username) => {
    if(this.props.teamUsers.length === 0 ) {
      return <Header content="Select a team to view members!" />
    } else {
      return this.props.teamUsers.map(({ username }) => {
        return <List.Item value={username}>{username}</List.Item>
      });
    }
    // loop through 
    // find out which team you want to loop through and get the users 

  }

  handleChange = (event) => {
    console.log(event.target.value);
    //call action creator, take team name, send to reducers, reducer looks at team name, sets state of teamname
    this.props.getTeamUsers(event.target.value, this.props.getUserTeams) 
  }

  render() {
    // console.log("TEAMUSERS:", this.props.teamUsers);
    // console.log("HERE:", this.props.getUserTeams);
   // console.log("team:", this.props.selectedTeam.values.teamNames);
    // console.log("state:", this.state);
    return (
      <Segment key="team_id">
        <Container>
<Header> Select a team to view your fellow team members </Header>
         <Container textAlign='left'>
            <Form>
              <select onChange={this.handleChange}>
                {this.getTeamList()}
              </select>
            </Form>
        </Container>
        <Container textAlign='right'>
            <p>LINK TO TEAM CONTAINER</p>
            <Button animated='fade'>
              <Button.Content as={Link} to='/TeamContainer' hidden>Join Team</Button.Content>
              <Button.Content visible>
                <Icon name='add user' />
              </Button.Content>
            </Button>
            <Button animated='fade'>
            <Button.Content hidden>Create Team</Button.Content>
            <Button.Content visible>
              <Icon name='users' />
            </Button.Content>
              </Button>
          </Container>
          </Container>
          <Grid columns={2} stackable textAlign='center'>
          <Grid.Row  verticalAlign='middle'>
          <Grid.Column>
          <List>
          {this.renderUsersByTeamId()}
          </List>
          </Grid.Column>

          <Grid.Column>
          <p>DISPLAY: VIEW TEAM EXERCISE LOG</p>
          
          </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedTeam: state.form['Team'],
    teamUsers: state.team.teamUsers
  };
}

export default compose(
  connect(mapStateToProps, { getTeamUsers }),
  reduxForm({ form: 'Team'}))(Team);
