import React, { Component } from "react";
import { Divider, Grid, Statistic, Table, Header } from "semantic-ui-react";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getTeamUsers } from '../../actions/team';

class User extends Component {

  renderUserLogHistory = () => {
    console.log("HELLO", this.props.getUserTeams);
    if (this.props.getUserTeams.length === 0) {
      return <Header content="No teams found!" />;
    } else {
      return this.props.getUserTeams.logs.map(({ timeStamp, time, distance }) => {
        return (
          <Table.Row>
          <Table.Cell textAlign="center">{timeStamp}</Table.Cell>
          <Table.Cell textAlign="center">{distance}</Table.Cell>
          <Table.Cell textAlign="center">{time}</Table.Cell>
          <Table.Cell textAlign="center">6</Table.Cell>
        </Table.Row>
        );
      });
    }
  };

  render() {
    console.log("I'M INSIDE USER:", this.props);
    return (
      <div>
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
          <Grid.Row centered columns={2}>
            <Grid.Column textAlign="center">
              <Statistic size="mini">
                <Statistic.Label>Total Miles Run</Statistic.Label>
                <Statistic.Value>2,204</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Statistic size="mini">
                <Statistic.Label>Time Spent Running</Statistic.Label>
                <Statistic.Value>60</Statistic.Value>
                <Statistic.Label>hours</Statistic.Label>
              </Statistic>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered columns={3}>
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
                Minutes/Mile{" "}
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
           {this.renderUserLogHistory()}
            <Table.Row>
              <Table.Cell textAlign="center">5/28/2020</Table.Cell>
              <Table.Cell textAlign="center">10</Table.Cell>
              <Table.Cell textAlign="center">60</Table.Cell>
              <Table.Cell textAlign="center">6</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell textAlign="center">5/20/2020</Table.Cell>
              <Table.Cell textAlign="center">5</Table.Cell>
              <Table.Cell textAlign="center">30</Table.Cell>
              <Table.Cell textAlign="center">6</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    teamUsers: state.team.teamUsers
  };
}

export default compose(
  connect(mapStateToProps, { getTeamUsers }))(User);
