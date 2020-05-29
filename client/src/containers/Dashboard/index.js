import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Grid, Statistic, Icon , Header, Container, Divider} from 'semantic-ui-react';
import axios from 'axios';

import User from '../User';
import Team from '../Team';
import Records from '../Records';
import Events from '../Events';
import ExerciseLog from '../ExerciseLog';

import { getUserById } from '../../actions/user';
import { getEvent } from '../../actions/event';

class Dashboard extends Component {

  componentDidMount() {
    this.props.getUserById();
    this.props.getEvent();
  }


  render() {
    // console.log(this.props.user);
    // console.log(this.props.user.teams);

    const { pathname } = this.props.location;

    return (
      <>
        <Container textAlign='center'>
          <Header font-size='1em'
            style={{ color: '#858585', margin: '1em 0em', textTransform: 'uppercase' }}
          > Quote of the Day </Header>
          <Header font-size='4em'
            style={{
              textTransform: 'uppercase',
              fontSize: '4rem',
              color: '#6e81c3'
            }}> You're doing great! </Header>
        </Container>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name='User'
                active={pathname === '/dashboard/user'}
                as={Link}
                to='/dashboard/user'
              />
              <Menu.Item
                name='Team'
                active={pathname === '/dashboard/team' || pathname === '/dashboard'}
                as={Link}
                to='/dashboard/team'
              />
              <Menu.Item
                name='Event'
                active={pathname === '/dashboard/event'}
                as={Link}
                to='/dashboard/event'
              />
              <Menu.Item
                name='Records'
                active={pathname === '/dashboard/records'}
                as={Link}
                to='/dashboard/records'
              />
              <Menu.Item
                name='Exercise Log'
                active={pathname === '/dashboard/exerciselog'}
                as={Link}
                to='/dashboard/exerciselog'
              />
            </Menu>
            <Divider />
            <Statistic size='mini'>
              <Statistic.Value>123</Statistic.Value>
              <Statistic.Label>Miles Run</Statistic.Label>
              <Divider />
              <Statistic.Value>1887</Statistic.Value>
              <Statistic.Label>Miles to Event Goal</Statistic.Label>
              <Divider />
              <Statistic.Value>
                <Icon name='quidditch' />Fly to the Moon
            </Statistic.Value>
              <Statistic.Label>Current Event</Statistic.Label>
            </Statistic>
      </Grid.Column>
        <Grid.Column stretched width={12}>
          <Switch>
            <Route exact path='/dashboard/user' render={() => <User />} />
            <Route exact path='/dashboard/team' render={() =>
              <Team
                getUserTeams={this.props.user.teams}
              />} />
            <Route exact path='/dashboard/event' render={() => <Events
              getUserTeams={this.props.user.teams}
            />} />
            <Route exact path='/dashboard/records' render={() => <Records />} />
            <Route exact path='/dashboard/exerciselog' render={() => <ExerciseLog
              getUserTeams={this.props.user.teams}
            />} />
            <Route path='/dashboard' render={() => <Team
              getUserTeams={this.props.user.teams}
            />} />
          </Switch>
        </Grid.Column>

      </Grid>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.currentUser,
    myTeams: state.users.currentUser.teams,
  };
}

export default connect(mapStateToProps, { getUserById, getEvent })(Dashboard);