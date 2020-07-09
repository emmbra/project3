import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Button,
  Grid,
  Form,
  Radio,
  Divider,
  Segment,
  List,
  Icon,
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
        const filteredTeams = this.props.allTeams.filter(team => team.teamStatus === 'available')
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
        {/* <label>{label}</label> */}
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
    // console.log("PROPS:", this.props);
    return (
      <Segment style={{ maxWidth: 800, marginLeft: 'auto', marginRight: 'auto', marginTop: 30, marginBottom: 30, opacity: '0.9' }}>
        <Divider
          as='h2'
          className='header'
          horizontal
          style={{ color: '#858585', margin: '1em 0em', textTransform: 'uppercase' }}
        >
          Hurry and get on a team!
        </Divider>
        <List as='ol' color='black' style={{ textAlign: "left" }}>
          <List.Item as='li' value='*'>
            Every team can only have up to 5 members.
          </List.Item>
          <List.Item as='li' value='*'>
            There are <b>private</b> and <b>public</b> teams, private teams require a passcode so make sure to share your passcode to your desired team mates if you are creating a team.
           </List.Item>
          <List.Item as='li' value='*'>
            If you are joining a team, the lock icon <Icon name='lock' /> signified a private team and the unlocked icon <Icon name='lock open' /> represents a public team.
         </List.Item>
          <List.Item as='li' value='*'>
            Have Fun!
         </List.Item>
        </List>
        <Divider style={{ color: '#858585', margin: '1em 0em',}} />
        <Grid columns={2} stackable textAlign='center'>
          {!this.state.isClicked && (
            <Grid.Row verticalAlign='middle'>
              <Grid.Column>
                <Button
                  icon='users'
                  size='huge'
                  // color='#34c4f8'
                  content='Create Team'
                  onClick={() => this.renderTeamView('create')}
                />
              </Grid.Column>
              <Grid.Column>
                <Button
                  icon='add user'
                  size='huge'
                  // color='glaucous'
                  content='Join Team'
                  // todos={this.props.userTodos.slice(this.state.start, this.state.end)}
                  // teams = {this.props}
                  // handleUpdate={this.props.addUserToTeam()}
                  onClick={() => this.renderTeamView('join')}
                />
              </Grid.Column>
            </Grid.Row>
          )}
          <List celled>
            {this.renderView()}
          </List>
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
