import React, { Component } from "react";
import { List, Form, Header, Button, Container, Image, Grid } from 'semantic-ui-react'

import mascots from "../../../static/mascots"

export default (props) => {
    console.log(mascots)
    return (
      <Container textAlign='left'>
        <Form>
          <Header>
            Create a Team!
          </Header>
          <List as='ol'>
            <List.Item as='li' value='*'>
              Every team can only have up to 5 members.
            </List.Item>
          </List>
          <Form.Field>
            <label>Team Name: </label>
            <input placeholder='The Lobsters' />
          </Form.Field>
          <Form.Group grouped>
            <label>Team Mascot</label>
            <Grid>
              <Grid.Row  stretched  padded>
                  <Button>
                    Snake
                    <img src={mascots.snake.src}/>
                  </Button>

                  <Button>
                    Tiger
                    <img src={mascots.tiger.src}/>
                  </Button>

                  <Button>
                    Turtle
                    <img src={mascots.turtle.src}/>
                  </Button>
              </Grid.Row>
            </Grid>
          </Form.Group>

          <Form.Group grouped>
            <label>Do you want this to be a private or public team? </label>
            <Form.Field name = 'public' label='Public' control='input' type='checkbox' />
            <Form.Field name = 'private' label='Private' control='input' type='checkbox' />
            <Form.Field name = 'passcode' type='password'>
              <label>If this is a private team, please enter a passcode for your other team members</label>
              <input placeholder='ThePasscode' />
            </Form.Field>
          </Form.Group>

          <Button 
            type='submit'
            onClick={ () => props.onSubmitCreateTeam }
          >Submit</Button>
          <Button onClick={props.history.goBack}>Go Back</Button>
        </Form>
      </Container>
    )
  }

