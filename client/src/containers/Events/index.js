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
      <List.Item>
        {this.getTeamItem()}
      </List.Item>
    );
  };
  renderSelectTeam = (field) => {
    // console.log(field.input);
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
    // console.log(event.target.value);
    //call action creator, take team name, send to reducers, reducer looks at team name, sets state of teamname
    this.props.getTeamUsers(event.target.value, this.props.getUserTeams);
  };
  onSubmit = async (formValues) => {
    // console.log("I am values", formValues)
    try {
      this.props.joinEvent(formValues.teamId);
      // console.log(formValues);
    } catch (e) {
      console.log(e);
    }
  };
  getTeamItem = () => {
    // console.log("IN EVENTS", this.props.eventList.teams);
    return this.props.eventList?.teams?.length !== 0 && this.props.eventList?.teams?.map((team) => {
      // console.log("teams")
      // console.log(name)
      return (
        <Grid stacked value={team.name} >
          <Grid.Row verticalAlign='middle' style={{ padding: '0' }}>
            <Grid.Column width={2}>
              <label>{team.name}</label>
            </Grid.Column>
            <Grid.Column width={12}>
              <Progress
                verticalAlign='middle'
                // THIS PERCENTAGE DOES NOT WORK YET ALL VALUES COME UP AS ZERO
                percent= {team.totalDistance}
                 color='blue'
                style={{
                  // width: 300,
                  margin: '0',
                }} />
            </Grid.Column>
            <Grid.Column width={2}>
              <img src={mascots[`${team.mascotIMG}`]} alt="active mascots" width='30px' />
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
    // console.log("EVENTLIST:", this.props.eventList);
    // console.log("PROPS:", this.props);
    const { handleSubmit } = this.props;
    return (
      <div>
        <Segment textAlign='left'>
          <Grid>
            <Grid.Row>
              <Grid.Column width={10}>
                <Header as='h3' style={{ color: '#ca50a1',textTransform: 'uppercase' }}>
                  Event Name:
                  <Header.Content style={{ color: '#858585', display: 'inline', fontWeight:'normal' }}>
                    {this.props.eventList.name}
                  </Header.Content>
                </Header>
                <Header as='h3' style={{ color: '#ca50a1',textTransform: 'uppercase' }}>
                  Event Distance:
                  <Header.Content style={{ color: '#858585', display: 'inline', fontWeight:'normal'  }}>
                    {this.props.eventList.distance} miles
                  </Header.Content>
                </Header>
                <Header as='h3' style={{ color: '#ca50a1',textTransform: 'uppercase' }}>
                  Participating Teams & Current Progress
                </Header>
              </Grid.Column>
              <Grid.Column width={5}>
                <Form onSubmit={handleSubmit(this.onSubmit)}>
                  {/* <Grid centered> */}
                  <Grid.Row>
                    <Grid.Column width={2} verticalAlign='bottom' style={{ textAlign: 'right', float: 'left' }}>
                      <Header as='h5'>Select a team to add to this event:</Header>
                      <Field name="teamId" component={this.renderSelectTeam} />
                    </Grid.Column>
                    <Grid.Column width={1} style={{ textAlign: 'right', float: 'right' }}>
                      <Button type="submit">Submit</Button>
                    </Grid.Column>
                  </Grid.Row>
                  {/* </Grid>  */}
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div style={{ height: "250px", overflowX: "scroll", paddingTop:'30px' }}>
            {this.renderTeamByEvent()}
          </div>
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