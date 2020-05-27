import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  Button,
  Divider,
  Grid,
  Header,
  Form,
  Icon,
  Search,
  Segment,
  Checkbox,
  Radio,
} from 'semantic-ui-react';
import { addTeams, addUserToTeam, getAllTeams } from '../../actions/team';

import JoinTeam from './JoinTeam';
import CreateTeam from './CreateTeam';

class TeamContainer extends Component {
  state = {
    teamView: '',
    isClicked: false,
  };

  componentDidMount() {
    this.props.getAllTeams();
  }

  onSubmit = async (formValues) => {
    try {
      this.props.addTeams(formValues, () => {
        this.props.history.push('/dashboard');
      });
    } catch (e) {
      console.log(e);
    }
  }

  
  // onClick = async () => {
  //   try {
  //     this.props.addUserToTeam();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // onSubmit = async (formValues, dispatch) => {
  //   console.log('test');
  //   try {
  //     const { data } = await axios.post('/api/auth/signup', formValues);
  //     localStorage.setItem('token', data.token);
  //     dispatch({ type: AUTH_USER, payload: data.token });
  //     this.props.history.push('/counter');
  //   } catch (e) {
  //     dispatch({ type: AUTH_USER_ERROR, payload: e });
  //   }
  // }
  
  renderTeamView = (value) => {
    this.setState({ teamView: value, isClicked: true });
  };

  resetView = () => {
    this.setState({ teamView: '', isClicked: false });
  };

  renderView = () => {
    switch (this.state.teamView) {
      case 'create':
        return (
          <CreateTeam
            resetView={this.resetView}
            renderInput={this.renderInput}
            renderRadio={this.renderRadio}
            addTeams={this.props.addTeams}
            onSubmit={this.onSubmit}
          />
        );
      case 'join':
        return (
          <JoinTeam
            resetView={this.resetView}
            teams={this.props.allTeams}
            renderInput={this.renderInput}
            renderRadio={this.renderRadio}
            handleUpdate={this.addUserToTeam}
          />
        );
      default:
        return <div></div>;
    }
  };
  
  renderRadio = ({ input, label }) => (
    <Radio
      label={label}
      // checked={input.value ? true : false}
      onCheck={input.onChange}
    />
  );

  // do styling inside of renderInput
  renderInput = ({ input, meta, type, label, placeholder }) => {
    return (
      <div>
        <label>{label}</label>

        <Form.Input
          {...input}
          fluid
          error={meta.touched && meta.error}
          autoComplete='off'
          placeholder={placeholder}
        />
      </div>
    );
  };

  render() {
    console.log('HELLO');
    console.log(this.props);
    return (
      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
        {/* <Divider vertical>Or</Divider> */}
          {!this.state.isClicked && (
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Button
                  // as={Link}
                  // to='/createteam'
                  icon='users'
                  size='huge'
                  color='teal'
                  content='Create Team'
                  onClick={() => this.renderTeamView('create')}
                />
              </Grid.Column>
              <Grid.Column>
                <Button
                  // as={Link}
                  // to='/jointeam'
                  icon='add user'
                  size='huge'
                  color='teal'
                  content='Join Team'
                  // todos={this.props.userTodos.slice(this.state.start, this.state.end)}
                  // teams = {this.props}
                  // handleUpdate={this.props.addUserToTeam()}
                  onClick={() => this.renderTeamView('join')}
                />
              </Grid.Column>
            </Grid.Row>
          )}
          <Grid.Row>           
            <Grid.Column>{this.renderView()}</Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

function mapStateToProps(state) {
  return {
    allTeams: state.team.teams,
  };
}

export default connect(mapStateToProps, {
  addTeams,
  addUserToTeam,
  getAllTeams,
})(TeamContainer);
