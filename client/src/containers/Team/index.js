import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { Button, Header, Form, Icon, Container, Grid, List, Divider,} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { getTeamUsers } from '../../actions/team';

// import mascots from '../../static/mascots';

class Team extends Component {


  getTeamList = () => {
    if (this.props.getUserTeams?.length === 0) {
      return <Header content='No teams found!' />;
    } else {
      return this.props.getUserTeams?.map(({ name }) => {
        return <option value={name}>{name}</option>;
      });
    }
  };

  renderUsersByTeamId = (username) => {
        // console.log('HELLO MASCOT', this.props.getUserTeams);
    if (this.props.teamUsers.length === 0) {
      return <Header as='h5' content='Select a team to view members!' />
    } else {
      return this.props.teamUsers.map(({ username }) => {
        // console.log(this.props.users);
        return <List.Item value={username}>{username}</List.Item>
        // <List.Item value={username}>{username}</List.Item>
      });
    }
    // loop through 
    // find out which team you want to loop through and get the users 

  }

  // renderTeamMascot = () => {
  //   console.log('HELLO MASCOT', this.props.getUserTeams);
  //   if (this.props.teamUsers.length === 0) {
  //     return <Header content='No teams found!' />;
  //   } else {
  //     console.log("form Team", this.props.selectedTeam.values.teamList)
  //     return this.props.getUserTeams?.map(({ mascotIMG }) => {
  //       return (
  //         <Table.Row >
  //           {/* <Table.Cell textAlign='center'>{mascots({mascotIMG})}</Table.Cell> */}
  //         </Table.Row>
  //       );
  //     })
  //     }

  handleChange = (event) => {
    // console.log(event.target.value);
    //call action creator, take team name, send to reducers, reducer looks at team name, sets state of teamname
    this.props.getTeamUsers(event.target.value, this.props.getUserTeams)
  }

  render() {

    // console.log('TEAMUSERS:', this.props);
    // console.log('HERE:', this.props.getUserTeams);
    // console.log('team:', this.props.selectedTeam.values);
    // console.log('state:', this.state);
    return (
      <Container key='team_id'>
        <Grid celled>
          <Grid.Column stackable width={13}>
            <Header> Select a team to view your fellow team members </Header>
            <Container textAlign='left'>
              <Form>
                <Field name='teamList' component='select' onChange={this.handleChange}>
                  {this.getTeamList()}

                  {/* <select onChange={this.handleChange}>
                  {this.getTeamList()}
                </select> */}
                </Field>
              </Form>
            </Container>
          </Grid.Column>
          <Grid.Column stackable width={3}>
            <Container textAlign='center'>
              <Header as='h5'>Looking for a new team? Click Here! </Header>
              <Button animated='fade'
                as={Link}
                to='/teamsignup'>
                <Button.Content hidden>Teams</Button.Content>
                <Button.Content visible>
                  <Icon name='users' />
                </Button.Content>
              </Button>
            </Container>
          </Grid.Column>
        </Grid>
        <Grid columns={2} stackable textAlign='center'>
          <Grid.Row>
            <Grid.Column width={6}>
              <Divider
                as='h2'
                className='header'
                horizontal
                style={{ color: '#858585', margin: '1em 0em', textTransform: 'uppercase' }}
              >
                Team Members
              </Divider>
              <Header style={{ textTransform: 'uppercase' }} >
                {this.renderUsersByTeamId()}
              </Header>
            </Grid.Column>
            {/* <Grid.Column stackable width={10}>
              <Divider
                as='h2'
                className='header'
                horizontal
                style={{ color: '#858585', margin: '1em 0em', textTransform: 'uppercase' }}
              >
                Team Exercise Log Totals
              </Divider>
              <Header color='red'>DISPLAY: VIEW TEAM EXERCISE LOG</Header>
              <Header color='orange'>DATE | TOTAL MILES RUN | TOTAL DURATION</Header>
              <Table celled selectable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell textAlign='center'>
                      {' '}
               Total Distance (miles){' '}
                    </Table.HeaderCell>
                    <Table.HeaderCell textAlign='center'>
                      {' '}
                Total Duration (minutes){' '}
                    </Table.HeaderCell>

                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {this.renderUserLogHistory()}
                </Table.Body>
              </Table> 
            </Grid.Column>*/}
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedTeam: state.form['Team'],
    teamUsers: state.team.teamUsers
  };
}

export default compose(
  connect(mapStateToProps, { getTeamUsers }),
  reduxForm({ form: 'Team' }))(Team);
