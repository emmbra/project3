import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Sticky, Container } from 'semantic-ui-react'

import SignUp from '../SignUp';
import SignIn from '../SignIn';
import SignOut from '../SignOut';
import TeamContainer from '../TeamContainer';
// import CreateTeam from '../TeamContainer/CreateTeam';
// import JoinTeam from '../TeamContainer/JoinTeam';
import Information from '../../components/Information';
import Dashboard from '../Dashboard';
// import User from '../User';
// import Team from '../Team';
// import Records from '../Records';
// import Events from '../Events';
// import ExerciseLog from '../exerciselog';

import Footer from '../Footer';
import './style.css'

import Navbar from './../../components/Navbar';

class App extends Component {
  render() {
    return (
      <div class='backgroundImage'>
        <Sticky>
          <Navbar authenticated={this.props.authenticated} />
        </Sticky>
        <Grid centered>
          <Grid.Column textAlign='center' >
            <Route exact path='/' component={SignUp} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signout' component={SignOut} />
            <Route exact path='/teamsignup' component={TeamContainer} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/information' component={Information} />
            {/* <Route exact path='/user' component={User}/>
          <Route exact path='/team' component={Team}/>
          <Route exact path='/records' component={Records}/>
          <Route exact path='/events' component={Events}/>
          <Route exact path='/everciselog' component={ExerciseLog}/> */}
          </Grid.Column>
        </Grid>
        <br/>
        <br/>
        <br/>
        {/* <Sticky>
        <Footer />
        </Sticky> */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
