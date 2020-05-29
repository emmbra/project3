import React, { Component } from "react";
import {
  Segment,
  Accordion,
  Button,
  Form,
  Header,
  List,
} from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { joinEvent, getEvent } from "../../actions/event";
import { getTeamUsers } from "../../actions/team";

class Event extends Component {
  renderTeamByEvent = (field) => {
    return (
      <Header>
        {this.getTeamItem()}
        {/* {this.getTeamList()} */}
      </Header>
    );
  };

  renderSelectTeam = (field) => {
    console.log(field.input);
    return (
      <select {...field.input}>
        {this.getTeamList()}
      </select>
    );
  };

  getTeamList = () => {
    if (this.props.getUserTeams?.length === 0) {
      return <Header content="No teams found!" />;
    } else {
      return this.props.getUserTeams?.map(({ name, _id }) => {
        return (
          <option key={_id} value={_id}>
            {name}
          </option>
        );
      });
    }
  };

  handleChange = (event) => {
    console.log(event.target.value);
    //call action creator, take team name, send to reducers, reducer looks at team name, sets state of teamname
    this.props.getTeamUsers(event.target.value, this.props.getUserTeams);
  };

  onSubmit = async (formValues) => {
    console.log("I am values", formValues)
    try {
      this.props.joinEvent(formValues.teamId);
      console.log(formValues);
    } catch (e) {
      console.log(e);
    }
  };

  getTeamItem = () => {
    return this.props.eventList.teams.map(({ name }) => {
    // console.log("teams")
    // console.log(name)
      return <List.Item value={name}>{name}</List.Item>;
    });
  };

  //loop through this.props.eventList.teams.name (teams array)
  //create level1panel for each time
  // render on the page

  render() {
    console.log("EVENTLIST:", this.props.eventList);
    console.log("PROPS:", this.props);
    const { handleSubmit } = this.props;
    // const Teams = [
    //   { key: 'panel-1a', title: 'Participating Teams', content: {this.renderTeamByEvent()} }
    // ]
    
    // const rootPanels = [
    //   { key: 'panel-1', title: {this.props.eventList.name} , content: { content: <Accordion.Accordion panels={Teams} /> } },
    // ]

    return (
      <div>
        <Segment>
        <Header>Event Name: {this.props.eventList.name}</Header>
        <Header>Event Distance: {this.props.eventList.distance} miles</Header>

        <Header>Participating Teams:</Header>
        <Segment> {this.renderTeamByEvent()}  </Segment>
        {/* <Segment>
        <Accordion defaultActiveIndex={0} 
              panels={ key: 'panel-1', 
              title: {this.props.eventList.name} , 
              content: { content: 
                <Accordion.Accordion 
                  panels={ key: 'panel-1a', 
                            title: 'Participating Teams', 
                            content: {renderTeamByEvent()} 
                  } />
              } } styled />
          </Segment> */}
          <Form onSubmit={handleSubmit(this.onSubmit)}>
            {/* <List>{this.renderTeamByEvent}</List> */}
            {/* <Segment> {this.getTeamItem}  </Segment>
            <Field name="teamEvent" component={this.getTeamItem} /> */}
            <Header>Select a team to add to this event:</Header>
            <Field name="teamId" component={this.renderSelectTeam} />
            <Button type="submit">Submit</Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    eventList: state.event.eventCreated,
  };
}

export default compose(
  connect(mapStateToProps, { joinEvent, getEvent, getTeamUsers }),
  reduxForm({ form: "Event" })
)(Event);
