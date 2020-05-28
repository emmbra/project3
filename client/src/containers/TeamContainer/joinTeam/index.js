import React from "react";
import { Header, List, Button, Popup, Grid, Divider, Form } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { connect } from "mongoose";
import { withRouter } from 'react-router-dom';
import axios from 'axios';

// Make sure handleUpdate is passed in parent container
// handleUpdate="{this.props.updateCompleteUserTodoById}

function JoinTeam(props) {
  const { handleSubmit } = props;
  console.log(props);
  const renderInput = ({ input, meta, teamid }) => {
    console.log(input)
    console.log(teamid);
    return  (
      <>
        <Form.Input
          {...input}
          error={ meta.error || meta.valid }
        />
        <Button
          color='green'
          content='What is the passcode for this team?'
          onClick={ (event) => props.handleUpdate(event, teamid, input.value, () => {
            console.log("Called");
            props.history.push('/dashboard');
          } )}
          type='submit'/>
      </>
    )
  }
  console.log(props);
  if (props.teams.length === 0) {
    return <Header content="There are no teams yet." />;
  } else {
    return props.teams.map(
      ({ _id, name, mascotIMG, teamType, teamStatus, passcode, users }) => {
        if (teamType === 'public') {
        return (
          <Grid key={_id} teamid={_id}> 
            <Grid.Column>
                <List.Item>
                  <List.Content floated="left">
                    <p>
                      {/* {teamType} */}
                      {name}
                      {mascotIMG}
                    </p>
                  </List.Content>
                  {/* <List.Content floated="right"> */}
                  <List.Content position="top right">
                    <Popup
                      on="click"
                      position="top right"
                      content="Join this team!"
                      trigger={
                        <Button
                          icon='add'
                          color="green"
                          size="small"
                          onClick={(event) => props.handleUpdate(event, _id, null, () =>{
                            console.log("Called");
                            props.history.push('/dashboard');
                          })
                          }
                        />
                      }
                    />
                  </List.Content>
                </List.Item>
                 {/* <Button onClick={props.resetView}>Go Back</Button> */}
                 </Grid.Column>
              </Grid>
        )
      } else
      return (
        <Grid key={_id}>
          <Grid.Column>
            <List.Item>
              <List.Content floated="left">
                <p>
                  {name}
                  {mascotIMG}
                </p>
              </List.Content>
              <List.Content floated="right" position='top right'>
              <Field name={name} teamid={_id} component={renderInput} type="text" placeholder="Passcode" />
              {/* <Popup
                  on='click'
                  position='top right'
                  // content='Join this team!'
                  trigger={
                    <Button
                      color='orange'
                      icon='add'
                      size='small'
                    />
                  }
                  content={
                    <Button
                      color='green'
                      content='What is the passcode for this team?'
                      onClick={ (event) => props.handleUpdate(_id)}
                    />
                  }
                /> */}
              </List.Content>
            </List.Item>
          </Grid.Column>
        </ Grid>
        // <Button onClick={props.resetView}>Go Back</Button> 
     
)})
  }

}


export default withRouter(reduxForm({ form: "JoinTeam" })(JoinTeam));
