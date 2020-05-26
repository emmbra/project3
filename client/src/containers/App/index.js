import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'

import SignUp from '../SignUp';
import SignIn from '../SignIn';
import SignOut from '../SignOut';
import TeamContainer from '../TeamContainer';
import CreateTeam from '../TeamContainer/CreateTeam';
import JoinTeam from '../TeamContainer/JoinTeam';


import Navbar from './../../components/Navbar';


class App extends Component {
  render() {
    return (
      <div>
      <Navbar authenticated={this.props.authenticated}/>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 700 }}>

          <Route exact path='/' component={SignUp}/>

          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signout' component={SignOut}/>
          <Route exact path='/teamsignup' component={TeamContainer}/>
          <Route exact path='/createteam' component={CreateTeam}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/user' component={User}/>
          <Route exact path='/records' component={Records}/>
          <Route exact path='/events' component={Events}/>
          <Route exact path='/everciselog' component={JoinTeam}/>

          {/* <Route exact path='/alltodos' component={AllTodosList}/>
          <Route exact path='/usertodos' component={UserTodoList}/>
          <Route exact path='/counter' component={Counter}/> */}
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
