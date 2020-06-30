import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Grid, Statistic, Icon, Header, Container, Divider, Segment } from 'semantic-ui-react';


import User from '../User';
import Team from '../Team';
import Records from '../Records';
import Events from '../Events';
import ExerciseLog from '../ExerciseLog';

import { getUserById } from '../../actions/user';
import { getEvent } from '../../actions/event';
import { getTotalUserDistance } from '../../actions/log';
import { getRecords } from '../../actions/records';

import quotes from '../../static/quotes'


class Dashboard extends Component {

  componentDidMount() {
    this.props.getUserById();
    this.props.getEvent();
    this.props.getTotalUserDistance();
    this.props.getRecords();
  }

  shuffled = () => {
    // console.log(Object.keys(quotes).length)
    let randomNum = Math.floor(Math.random() * 5);
    let randomQuote = quotes.quotes[randomNum];
    let quoteText = randomQuote.text;
    let quoteAuthor = randomQuote.author;
    return (
      <div >
        <p style={{
          margin: '.5em 0em',
          textTransform: 'uppercase',
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
    // console.log("TEAM?:", this.props.user);
    // console.log("DASH:", this.props.getTotalUserDistance);
    const { pathname } = this.props.location;
    return (
      <div class="mainRenderBody">
        <Grid textAlign='center'>
          <Header fontSize='3em'
            style={{ color: '#858585', margin: '1em', textTransform: 'uppercase', width: '300' }}
          > Motivational Quote</Header>
          <Header style={{ margin: 0 }}
          >
            {this.shuffled()}
          </Header>
        </Grid>
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
                active={pathname === '/dashboard/team'}
                as={Link}
                to='/dashboard/team'
              />
              <Menu.Item
                name='Event'
                active={pathname === '/dashboard/event' || pathname === '/dashboard'}
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
            {/* <Divider style = {{ margin: '0'}}/> */}
            {/* <Segment style={{ border: '1px solid #fa7a34', boxShadow: '0 1px 2px 0 rgba(34,36,38,.15)',color: '#fa7a34' }}>
            <Header as='h4' style={{ color: '#34c4f8', display: 'inline-block', padding: '0px 10px 0px 0px', margin: '0em 0em', textTransform: 'uppercase', }}>
                123
                </Header>
                <Header as='h4' style={{ color: '#858585', display: 'inline-block', padding: '0px 10px 0px 0px', margin: '0em 0em', textTransform: 'uppercase', }}>
                Miles Run
              </Header>

              <Divider style = {{ margin: '0.2'}}/>

              <Header as='h4' style={{ color: '#34c4f8', display: 'inline-block', padding: '0px 10px 0px 0px', margin: '0em 0em', textTransform: 'uppercase', }}>
              1887
                </Header>
                <Header as='h4' style={{ color: '#858585', display: 'inline-block', padding: '0px 10px 0px 0px', margin: '0em 0em', textTransform: 'uppercase', }}>
              Miles to Event Goal
              </Header>

              <Divider style = {{ margin: '0.2'}}/>

              <Header as='h4' style={{ color: '#34c4f8', display: 'inline-block', padding: '0px 10px 0px 0px', margin: '0em 0em', textTransform: 'uppercase', }}>
              <Icon name='sun' />
              Run to the Sun
                </Header>
                <Header as='h4' style={{ color: '#858585', display: 'inline-block', padding: '0px 10px 0px 0px', margin: '0em 0em', textTransform: 'uppercase', }}>
              Current Event
              </Header>

            </Segment> */}
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
              <Route exact path='/dashboard/records' render={() => <Records
                getRecords={this.props.records} />} />
              <Route exact path='/dashboard/exerciselog' render={() => <ExerciseLog
                getUserTeams={this.props.user.teams}
              />} />
              <Route path='/dashboard' render={() => <Events
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
    records: state.records,
  };
}

export default connect(mapStateToProps, { getUserById, getEvent, getTotalUserDistance, getRecords })(Dashboard);