import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Menu, Button, Divider, Grid, Segment } from 'semantic-ui-react';
import User from '../User';
import Team from '../Team';
import Records from '../Records';
import Events from '../Events';
import ExerciseLog from '../ExerciseLog';

class Dashboard extends Component {
  
  render() {
    console.log(this.props);
    const { pathname } = this.props.location;

    return (
      <>
      <Menu tabular>
        <Menu.Item
          name='User'
          active={ pathname === '/dashboard/user'}
          as={Link}
          to='/dashboard/user' 
        />
        <Menu.Item
          name='Team'
          active={ pathname === '/dashboard/team' || pathname === '/dashboard' }
          as={Link}
          to='/dashboard/team' 
        />
        <Menu.Item
          name='Event'
          active={ pathname === '/dashboard/event'}
          as={Link}
          to='/dashboard/event'
        />
        <Menu.Item
          name='Records'
          active={ pathname === '/dashboard/records' }
          as={Link}
          to='/dashboard/records' 
        />
        <Menu.Item
          name='Exercise Log'
          active={ pathname === '/dashboard/exerciselog' }
          as={Link}
          to='/dashboard/exerciselog' 
        />
      </Menu>
      <Grid>
        <Switch>
          <Route exact path='/dashboard/user' render={ () => <User/>}/>
          <Route exact path='/dashboard/team' render={ () => <Team/>}/>
          <Route exact path='/dashboard/event' render={ () => <Events/>}/>
          <Route exact path='/dashboard/records' render={ () => <Records/>}/>
          <Route exact path='/dashboard/exerciselog' render={ () => <ExerciseLog/>}/>
          <Route path='/dashboard' render={ () => <Team/>} />
        </Switch>
      </Grid>
      </>
    );
  }
}

export default Dashboard;
