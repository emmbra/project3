import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Segment, Button, Header, Form, Divider } from 'semantic-ui-react'
import { addExerciseLog } from '../../actions/log';
import { getTeamUsers } from '../../actions/team';

class ExerciseLog extends Component {
  renderSelectTeam = (field) => {
    return (
      <select
        onChange={this.handleChange}
        {...field.input}>
        {this.getTeamList()}
      </select>
    )
  };

  getTeamList = () => {
    if (this.props.getUserTeams?.length === 0) {
      return <Header content="No teams found!" />;
    } else {
      return this.props.getUserTeams?.map(({ name, _id }) => {
        return <option value={_id}>{name}</option>;
      });
    }
  };

  handleChange = (event) => {
    console.log(event.target.value);
    //call action creator, take team name, send to reducers, reducer looks at team name, sets state of teamname
    this.props.getTeamUsers(event.target.value, this.props.getUserTeams)
  }

  onSubmit = async (formValues) => {
    try {
      console.log("EXERCISE LOG: clicking submit before formvalues")
      // console.log(formValues)
      this.props.addExerciseLog(formValues, () => {

        this.props.history.push('/dashboard');

      });
      // to redirect to the dashboard
      // this.props.history.push('/dashboard');
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <Segment>
        <Divider
          as='h2'
          className='header'
          horizontal
          style={{ color: '#858585', margin: '1em 0em', textTransform: 'uppercase' }}
        >
          How far did you go today?
        </Divider>
        <Form onSubmit={handleSubmit(this.onSubmit)}>
          <Form.Field inline>
            <Header as='h5'>Distance (in miles): </Header>
            <Field name='distance' component='input' type='number' />
          </Form.Field>
          <Form.Field inline>
            <Header as='h5'>Duration (in minutes): </Header>
            <Field name='time' component='input' type='number' />
          </Form.Field>
          <Form.Field inline>
            <Header as='h5'>Select your team:</Header>
            <Field name='teamId' component={this.renderSelectTeam} />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>

      </Segment>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedTeam: state.form['Team'],
    teamUsers: state.team.teamUsers
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { addExerciseLog, getTeamUsers }),
  reduxForm({ form: 'ExerciseLog' })
)(ExerciseLog);
