import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Grid, Statistic, Icon , Header, Container, Divider, Segment } from 'semantic-ui-react';


import User from '../User';
import Team from '../Team';
import Records from '../Records';
import Events from '../Events';
import ExerciseLog from '../ExerciseLog';

import { getUserById } from '../../actions/user';
import { getEvent } from '../../actions/event';
import { getTotalUserDistance } from '../../actions/log';

import quotes from '../../static/quotes'


class Dashboard extends Component {

  componentDidMount() {
    this.props.getUserById();
    this.props.getEvent();
    this.props.getTotalUserDistance();
  }

  shuffled = () => {
    console.log(Object.keys(quotes).length)
    let randomNum = Math.floor(Math.random() * 5);
    let randomQuote = quotes.quotes[randomNum];
    let quoteText = randomQuote.text;
    let quoteAuthor = randomQuote.author;
    return (
      <div >
        <p style={{
          margin: '0em 0em',
          // textTransform: 'uppercase',
          fontSize: '1.5rem',
          color: '#6e81c3',
          lineHeight: '0 em',
        }}
        >{quoteText}</p>
        <p style={{
          margin: '0em 0em',
          textTransform: 'uppercase',
          fontSize: '1rem',
          color: '#34c4f8',
          lineHeight: '0 em',
        }}
        > - {quoteAuthor}</p>
      </div>
    );
  }

  render() {
    // console.log(this.props.user);
    console.log("TEAM?:", this.props.user);
    // console.log("DASH:", this.props.getTotalUserDistance);
    const { pathname } = this.props.location;
    return (
      <div class="mainRenderBody">
        <Container textAlign='center'>
          <Header font-size='1em'
            style={{ color: '#858585', margin: '0', textTransform: 'uppercase' }}
          > Motivation</Header>
          <Header style={{ margin: 0}}
          >
            {this.shuffled()}
            {/* You're doing great!  */}
          </Header>
        </Container>
        <Divider></Divider>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular size='large'>
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
            <Segment>
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
              <Route exact path='/dashboard/user' render={() => <User
                totalUserDistance={this.props.totalUserDistance}
                getUserTeams={this.props.user}
              />} />
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users.currentUser,
    myTeams: state.users.currentUser.teams,
    totalUserDistance: state.log.totalUserDistance,
  };
}

export default connect(mapStateToProps, { getUserById, getEvent, getTotalUserDistance })(Dashboard);