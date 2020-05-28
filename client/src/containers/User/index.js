import React, { Component } from 'react'
import { Divider, Grid, Image, Statistic, Header, Icon} from 'semantic-ui-react'

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
      </div>
    )
  }
}

export default User;
