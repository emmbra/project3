import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Segment, Button, Header, Form } from 'semantic-ui-react'
import { addExerciseLog } from '../../actions/log';
import { getTeamUsers } from '../../actions/team';

class ExerciseLog extends Component {
  renderSelectTeam = (field) => {
    return(
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
      this.props.addExerciseLog(formValues, () => {
       return <Header content="Right on! Keep up with the good work! " />;
      });
    } catch (e) {
      console.log(e);
    }
  }
  
  render() {
    console.log(this.props);
    const { handleSubmit } = this.props;
    return (
      <Segment>
        How far did you go today?
      <Form onSubmit={handleSubmit(this.onSubmit)}>
        <label>Distance (in miles): </label>
        <Field name='time' component='input' type='number'/> 
        <br/>
        <label>Duration (in minutes): </label>
        <Field name='distance' component='input' type='number'/>
        <label>Select your team:</label>
        <Field name='teamId' component={this.renderSelectTeam}/>
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
  connect(mapStateToProps, { addExerciseLog, getTeamUsers }),
  reduxForm({form: 'ExerciseLog'})
)(ExerciseLog);
