import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  Button,
  Grid,
  Header,
  Form,
  Segment,
  Radio,
  Container,
  Divider,
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
        const filteredTeams = this.props.allTeams.filter( team => team.teamStatus === 'available')
        console.log(filteredTeams);
        return (
          <JoinTeam
            resetView={this.resetView}
            teams={filteredTeams}
            renderInput={this.renderInput}
            renderRadio={this.renderRadio}
            handleUpdate={this.props.addUserToTeam}
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
    // console.log('HELLO');
    // console.log(this.props);
    return (
      <Container>
              <Divider
          as='h2'
          className='header'
          horizontal
          style={{ color: '#858585', margin: '1em 0em', textTransform: 'uppercase' }}
        >
          Hurry and get on a team!
        </Divider>
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
                  color='#34c4f8'
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
                  color='glaucous'
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
            {this.renderView()}
            {/* <Grid.Column>{this.renderView()}</Grid.Column> */}

          </Grid.Row>
        </Grid>
      </Container>
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
