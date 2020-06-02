import React, { Component } from "react";
import {
  Segment,
  Accordion,
  Button,
  Form,
  Header,
  List,
  Progress,
  Grid,
} from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { joinEvent, getEvent } from "../../actions/event";
import { getTeamUsers } from "../../actions/team";
import mascots from '../../static/mascots';

class Event extends Component {
  renderTeamByEvent = (field) => {
    return (
      <div style={{height: "300px", overflowX: "scroll", }}>
      <Header>
        {this.getTeamItem()}
        {/* {this.getTeamList()} */}
      </Header>
    </div>
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
    console.log(this.props.eventList);
    
      return this.props.eventList?.teams?.length !== 0 && this.props.eventList?.teams?.map(( team ) => {
        
      // console.log("teams")
      // console.log(name)
      return (
        <Grid stacked value={team.name}>
          <Grid.Row verticalAlign='middle' style={{ padding: '0' }}>
            <Grid.Column width={2}>
              {team.name}
            </Grid.Column>

            <Grid.Column width={12}>
              <Progress
                verticalAlign='middle'
                //input total distance 
                percent={44} color='blue'
                style={{
                  // width: 300,
                  margin: '0',
                }} />
            </Grid.Column>
            <Grid.Column width={2}>
              <img src={mascots[`${team.mascotIMG}`]} alt="active mascots" width='50px' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    })
  };
  

  //loop through this.props.eventList.teams.name (teams array)
  //create level1panel for each time
  // render on the page

  render() {
    console.log("EVENTLIST:", this.props.eventList);
    console.log("PROPS:", this.props);
    const { handleSubmit } = this.props;

    return (
      <div>
        <Segment textAlign='left'>
          <Header as='h3' style={{ color: '#ca50a1', }}>
            Event Name:
          <Header.Content style={{ color: '#858585', display: 'inline' }}>
              {this.props.eventList.name}
            </Header.Content>
          </Header>
          <Header as='h3' style={{ color: '#ca50a1', }}>
            Event Distance:
          <Header.Content style={{ color: '#858585', display: 'inline' }}>
              {this.props.eventList.distance}
            </Header.Content>
          </Header>
          <Header as='h3' style={{ color: '#ca50a1', }}>
            Participating Teams:
          <Header.Content style={{ color: '#858585', display: 'inline' }}>
              {this.props.eventList.name}
            </Header.Content>
          </Header>
          {/* <Header as='h3' style={{ color: '#ca50a1' }}>Event Distance: </Header>{this.props.eventList.distance} miles
          <Header as='h3' style={{ color: '#ca50a1' }}>Participating Teams:</Header> */}
          <Segment> {this.renderTeamByEvent()}  </Segment>
          <Form onSubmit={handleSubmit(this.onSubmit)}>
            {/* <List>{this.renderTeamByEvent}</List> */}
            {/* <Segment> {this.getTeamItem}  </Segment>
            <Field name="teamEvent" component={this.getTeamItem} /> */}
            {/* <Header>Select a team to add to this event:</Header>
            <Field name="teamId" component={this.renderSelectTeam} />
            <Button type="submit">Submit</Button> */}
            <Grid centered>
              <Grid.Row>
                <Grid.Column width={6} textAlign='right' verticalAlign='bottom'>
                  <Header>Select a team to add to this event:</Header>
                  <Field name="teamId" component={this.renderSelectTeam} />
                </Grid.Column>
                <Grid.Column width={6} textAlign='left' verticalAlign='bottom'>
                  <Button type="submit">Submit</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
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
