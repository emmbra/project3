import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Segment, Button, Header, Form, Divider, Modal, Image } from 'semantic-ui-react'
import { addExerciseLog } from '../../actions/log';
import { getTeamUsers } from '../../actions/team';
// import {winImage} from '../../assets/winner.png';


class ExerciseLog extends Component {
  // state = {
  //   isParentOpen: false,
  // }
  
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
    // console.log(event.target.value);
    //call action creator, take team name, send to reducers, reducer looks at team name, sets state of teamname
    this.props.getTeamUsers(event.target.value, this.props.getUserTeams)
  }

  onSubmit = async (formValues) => {
    try {

      this.props.addExerciseLog(formValues, (status) => {
        if (status === 'raceEnd') {
          // this.setState({
          //   isParentOpen: true
          // });
          // console.log(this.this.state.isParentOpen)
          alert('Winner winner chicken dinner!')
          // return (
          // // <Modal trigger={<Button>Click Here!</Button>} centered={false}>

          // <Modal
          //   open={this.state.isParentOpen}
          //   size="large"
          // >
          //   <Modal.Header>   CONGRATULATIONS! YOU ARE THE FIRST TO THE FINISH LINE!</Modal.Header>
          // <Modal.Content centered={true} image>
          //   <Image wrapped size='medium' src={winImage} />
          // </Modal.Content>
          // </Modal>
          // )
        }

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
