import React, { Component } from 'react'
import { Divider, Grid, Statistic, Table} from 'semantic-ui-react'

class User extends Component {
  render() {
    return (
      <div>
        I'M THE USER CONTAINER
        <Grid columns={5}>
          <Grid.Row>
            <Grid.Column>
              <Divider/>
            </Grid.Column>
            <Grid.Column>
                <Statistic size='mini'>
                  <Statistic.Label>Total Miles Run</Statistic.Label>
                  <Statistic.Value>2,204</Statistic.Value>
                </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Divider/>
            </Grid.Column>
            <Grid.Column>
                <Statistic size='mini'>
                  <Statistic.Label>Time Spent Running</Statistic.Label>
                  <Statistic.Value>60</Statistic.Value>
                <Statistic.Label>hours</Statistic.Label>
                </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Divider/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Divider/>
            </Grid.Column>
            <Grid.Column>
              <Statistic size='mini'>
                <Statistic.Label>Teams</Statistic.Label>
                <Statistic.Value>2</Statistic.Value>
              </Statistic>      
            </Grid.Column>
            <Grid.Column>
              <Statistic size='mini'>
                  <Statistic.Label>Active Events</Statistic.Label>
                  <Statistic.Value>1</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size='mini'>
                <Statistic.Label>Events Won</Statistic.Label>
                <Statistic.Value>1</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Divider/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Table celled selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='center'> Exercise Date </Table.HeaderCell>
            <Table.HeaderCell textAlign='center'> Distance (miles) </Table.HeaderCell>
            <Table.HeaderCell textAlign='center'> Duration (minutes) </Table.HeaderCell>
            <Table.HeaderCell textAlign='center'> Minutes/Mile </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell textAlign='center'>5/28/2020</Table.Cell>
            <Table.Cell textAlign='center'>10</Table.Cell>
            <Table.Cell textAlign='center'>60</Table.Cell>
            <Table.Cell textAlign='center'>6</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell textAlign='center'>5/20/2020</Table.Cell>
            <Table.Cell textAlign='center'>5</Table.Cell>
            <Table.Cell textAlign='center'>30</Table.Cell>
            <Table.Cell textAlign='center'>6</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      </div>
    )
  }
}

export default User;
