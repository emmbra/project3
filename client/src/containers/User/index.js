import React, { Component } from 'react'
import { Divider, Grid, Statistic, Table} from 'semantic-ui-react'

class User extends Component {
  render() {
    return (
      <div>
        <Divider
          as='h2'
          className='header'
          horizontal
          style={{ color: '#858585', margin: '1em 0em', textTransform: 'uppercase' }}
        >
          Personal Stats
        </Divider>
        <Grid>
          <Grid.Row centered columns={2} >
            <Grid.Column  textAlign='center'>
                <Statistic size='mini'>
                  <Statistic.Label>Total Miles Run</Statistic.Label>
                  <Statistic.Value>2,204</Statistic.Value>
                </Statistic>
                </Grid.Column>
                <Grid.Column textAlign='center'>
                <Statistic size='mini'>
                  <Statistic.Label>Time Spent Running</Statistic.Label>
                  <Statistic.Value>60</Statistic.Value>
                <Statistic.Label>hours</Statistic.Label>
                </Statistic>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered columns={3}>
            <Grid.Column textAlign='center'>
              <Statistic size='mini'>
                <Statistic.Label>Teams</Statistic.Label>
                <Statistic.Value>2</Statistic.Value>
              </Statistic>      
              </Grid.Column>
            <Grid.Column textAlign='center'>
              <Statistic size='mini'>
                  <Statistic.Label>Active Events</Statistic.Label>
                  <Statistic.Value>1</Statistic.Value>
              </Statistic>
              </Grid.Column>
            <Grid.Column textAlign='center'>
              <Statistic size='mini'>
                <Statistic.Label>Events Won</Statistic.Label>
                <Statistic.Value>1</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Divider
          as='h2'
          className='header'
          horizontal
          style={{ color: '#858585', margin: '1em 0em', textTransform: 'uppercase' }}
        >
          Exercise Log
        </Divider>
        
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
