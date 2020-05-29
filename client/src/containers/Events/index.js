import React, { Component } from 'react';
import { Segment, Accordion, Button, Form, Header } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { joinEvent, getEvent } from '../../actions/event';
import { getTeamUsers } from '../../actions/team';

const level1Panels = [
  { key: 'panel-1a', title: 'Team 1 - A', content: 'Team 1 - A Team Members' },
  { key: 'panel-ba', title: 'Team 2 - A', content: 'Team 2 - A Team Members' },
]

const Level1Content = (
  <div>
    Teams in Event 1
    <Accordion.Accordion panels={level1Panels} />
  </div>
)

const level2Panels = [
  { key: 'panel-2a', title: 'Team 1 - B', content: 'Team 1 - B Team Members' },
  { key: 'panel-2b', title: 'Team 2 - B' , content: 'Team 2 - B Team Members' },
]

const Level2Content = (
  <div>
  Teams in Event 2
  <Accordion.Accordion panels={level2Panels} />
  </div>
)

const rootPanels = [
  { key: 'panel-1', title: 'Event1', content: { content: Level1Content } },
  { key: 'panel-2', title: 'Event2', content: { content: Level2Content } },
]


class Event extends Component {
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
        return <option key={_id} value={_id}>{name}</option>;
      });
    }
  };

  handleChange = (event) => {
    console.log(event.target.value);
    //call action creator, take team name, send to reducers, reducer looks at team name, sets state of teamname
    this.props.getTeamUsers(event.target.value, this.props.getUserTeams) 
  };

  onSubmit = async (formValues) => {
    try {
      this.props.joinEvent(formValues);
      console.log(formValues);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Segment>
          <Form onSubmit={handleSubmit(this.onSubmit)}>
          <Accordion defaultActiveIndex={0} panels={rootPanels} styled />
          <label>Select your team:</label>
          <Field name='teamId' component={this.renderSelectTeam}/>
          <Button type='submit'>Submit</Button>
          </Form>
        </Segment>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

export default compose(
  connect(mapStateToProps, { joinEvent, getEvent, getTeamUsers }),
  reduxForm({form: 'Event'})
)
(Event);
