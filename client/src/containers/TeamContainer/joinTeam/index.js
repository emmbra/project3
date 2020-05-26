import React from 'react';
import { Header, List, Button, Popup } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { getAllTeams } from '../../../actions/team';

// Make sure handleUpdate is passed in parent container
      // handleUpdate="{this.props.updateCompleteUserTodoById}

function JoinTeam (props) {
  console.log(props);
  if (props.teams.length === 0) {
    return <Header content='There are no teams yet'/>;
  } else {
    return props.teams.map(({_id, name, mascotIMG, teamType, teamStatus,passcode, users}) => {
      return (
        <List.Item key={_id}>
          <List.Content floated='left' >
            <p style={{ teamType: 'public' ? 'color': 'green', fontSize: '20px'}}>{name}{mascotIMG}</p>
          </List.Content>
          <List.Content floated='right'>
            <Popup
              on='click'
              position='top right'
              trigger={
                <Button
                  color='blue'
                  content='Join this team!'
                  size='small'
                  onClick={ (event) => props.handleUpdate(_id, name, users)}
                />
              }
            />
          </List.Content>

          <List.Content floated='left' >
            <p style={{ teamType: 'private' ? 'color': 'red', fontSize: '20px'}}>{name}{mascotIMG}</p>
          </List.Content>
          <List.Content floated='right'>
            <Popup
              on='click'
              position='top right'
              trigger={
                <Button
                  color='orange'
                  content='Join this team!'
                  size='small'
                />
              }
              content={
                <Button
                  color='green'
                  content='What is the passcode for this team?'
                  onClick={ (event) => props.handleUpdate(_id, name, passcode)}
                />

              }
              
            />
          <Button onClick={props.resetView}>Go Back</Button>
          </List.Content>
        </List.Item>
      );
    });
  }
}

export default reduxForm({ form: 'JoinTeam' })(JoinTeam);
