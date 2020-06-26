import React, { Component } from "react";
import {
  Divider,
  Grid,
  Statistic,
  Table,
  Header,
  Container,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getTeamUsers } from "../../actions/team";
import moment from "moment";
import { submit } from "redux-form";

class User extends Component {
  renderUserLogHistory = () => {
    // console.log('HELLO', this.props.getUserTeams.logs);
    if (this.props.getUserTeams.length === 0) {
      return <Header content="No teams found!" />;
    } else {
      return this.props.getUserTeams.logs.map(
        ({ timeStamp, time, distance }) => {
          return (
            <Table.Row>
              <Table.Cell textAlign="center">
                {moment(timeStamp).format("MMM Do YYYY")}{" "}
              </Table.Cell>
              <Table.Cell textAlign="center">{distance}</Table.Cell>
              <Table.Cell textAlign="center">{time}</Table.Cell>
              <Table.Cell textAlign="center">
                {distance / (time / 60)}
              </Table.Cell>
            </Table.Row>
          );
        }
      );
    }
  };

  renderUserDistance = () => {
    if (!this.props.totalUserDistance.length) {
      return (
          <Statistic.Value>0</Statistic.Value>
      );
    } else {
      return (
          <Statistic.Value>
            {this.props.totalUserDistance[0].totalDistance}
          </Statistic.Value>
      );
    }
  };

  renderUserTime = () => {
    if (!this.props.totalUserDistance.length) {
      return (<Statistic.Value>0</Statistic.Value>);
    } else {
      return (
        <Statistic.Value>
          {this.props.totalUserDistance[0].totalTime}
        </Statistic.Value>
    );
    }
  };

  render() {
    // console.log("I'M INSIDE USER:", this.props);
    // console.log("I'M INSIDE USER and GETTING TEAMS:", this.props.getUserTeams);
    // console.log('TEAM USERS INSIDE USERS:', this.props.teamUsers);
    // const numberOfTeams = this.props.getUserTeams.teams
    return (
      <div class="dashboard">
        <Divider
          as="h2"
          className="header"
          horizontal
          style={{
            color: "#858585",
            margin: "1em 0em",
            textTransform: "uppercase",
          }}
        >
          Personal Stats
        </Divider>
        <Grid>
          <Grid.Row centered columns={5}>
            <Grid.Column textAlign="center">
              <Statistic size="mini">
                <Statistic.Label>Total Miles Run</Statistic.Label>
                {this.renderUserDistance()}
              </Statistic>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Statistic size="mini">
                <Statistic.Label>Time Spent Running</Statistic.Label>
                {this.renderUserTime()}
                <Statistic.Label>Minutes</Statistic.Label>
              </Statistic>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Statistic size="mini">
                <Statistic.Label>Teams</Statistic.Label>
                <Statistic.Value>2</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Statistic size="mini">
                <Statistic.Label>Active Events</Statistic.Label>
                <Statistic.Value>1</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Statistic size="mini">
                <Statistic.Label>Events Won</Statistic.Label>
                <Statistic.Value>1</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider
          as="h2"
          className="header"
          horizontal
          style={{
            color: "#858585",
            margin: "1em 0em",
            textTransform: "uppercase",
          }}
        >
          Exercise Log
        </Divider>
        <div style={{ height: "200px", overflowX: "scroll" }}>
          <Table celled selectable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell textAlign="center">
                  {" "}
                  Exercise Date{" "}
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  {" "}
                  Distance (miles){" "}
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  {" "}
                  Duration (minutes){" "}
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="center">
                  {" "}
                  Speed (MPH){" "}
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{this.renderUserLogHistory()}</Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    teamUsers: state.user,
  };
}

export default compose(connect(mapStateToProps, { getTeamUsers }))(User);
