import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Segment, Button, Header, Form, Icon, Container, Grid, List, Divider } from 'semantic-ui-react';
import { reduxForm } from 'redux-form';
import { getTeamUsers } from '../../actions/team';

class Team extends Component {
  getTeamList = () => {
    if (this.props.getUserTeams?.length === 0) {
      return <Header content='No teams found!' />;
    } else {
      return this.props.getUserTeams?.map(({ name }) => {
        return <option value={name}>{name}</option>;
      });
    }
  };

  renderUsersByTeamId = (username) => {
    if (this.props.teamUsers.length === 0) {
      return <Header content='Select a team to view members!' />
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
    // console.log('TEAMUSERS:', this.props);
    // console.log('HERE:', this.props.getUserTeams);
    // console.log('team:', this.props.selectedTeam.values.teamNames);
    // console.log('state:', this.state);
    return (
      <Segment key='team_id'>
        <Grid celled>
          <Grid.Column stackable width={13}>
            <Header> Select a team to view your fellow team members </Header>
            <Container textAlign='left'>
              <Form>
                <select onChange={this.handleChange}>
                  {this.getTeamList()}
                </select>
              </Form>
            </Container>
          </Grid.Column>
          <Grid.Column stackable width={3}>
            <Container textAlign='center'>
              <Header as='h5'>Looking for a new team? Click Here! </Header>
              <Button animated='fade'
                as={Link}
                to='/teamsignup'>
                <Button.Content hidden>Teams</Button.Content>
                <Button.Content visible>
                  <Icon name='users' />
                </Button.Content>
              </Button>
            </Container>
          </Grid.Column>
        </Grid>
        <Grid columns={2} stackable textAlign='center'>
          <Grid.Row>
            <Grid.Column width={6}>
              <Divider
                as='h2'
                className='header'
                horizontal
                style={{ color: '#858585', margin: '1em 0em', textTransform: 'uppercase' }}
              >
                Team Members
              </Divider>
              <Header style={{ textTransform: 'uppercase' }} >
                {this.renderUsersByTeamId()}
              </Header>
            </Grid.Column>
            <Grid.Column stackable width={10}>
              <Divider
                as='h2'
                className='header'
                horizontal
                style={{ color: '#858585', margin: '1em 0em', textTransform: 'uppercase' }}
              >
                Team Exercise Log Totals
              </Divider>
              <Header color='red'>DISPLAY: VIEW TEAM EXERCISE LOG</Header>
              <Header color='orange'>DATE | TOTAL MILES RUN | TOTAL DURATION</Header>
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
  reduxForm({ form: 'Team' }))(Team);
