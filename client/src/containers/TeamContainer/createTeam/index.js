import React from 'react'
import { List, Form, Header, Button , Container} from 'semantic-ui-react'

export default (props) => {
  return (
    <Container textAlign='left'> 
  <Form>
        <Header> Create a Team!
  </Header>
  <subHeader> 
    <List as='ol'>
      <List.Item as='li' value='*'>
        Every team can only have up to 5 members. 
      </List.Item>
</List>

  </subHeader>
    <Form.Field>
      <label>Team Name: </label>
      <input placeholder='The Lobsters' />
    </Form.Field>

    {/* <Form.Field>
      <label>Team Mascot</label>
      <input placeholder='Will be replaced with animal emojis' />
    </Form.Field> */}

    <Form.Group grouped>
      <label>Team Mascot</label>
      <Form.Field
        label='This one'
        icon = 'chess rock'
        control='input'
        type='radio'
        name='htmlRadios'
      />
      <Form.Field
        label='That one'
        icon ='themeisle'
        control='input'
        type='radio'
        name='htmlRadios'
      />
    </Form.Group>

    <Form.Group grouped>
      <label>Do you want this to be a private or public team? </label>
      <Form.Field label='Public' control='input' type='checkbox' />
      <Form.Field label='Private' control='input' type='checkbox' />
      <Form.Field>
      <label>If this is a private team, please enter a passcode for your other team members</label>
      <input placeholder='ThePasscode' />
    </Form.Field>
    </Form.Group>

    <Button type='submit'>Submit</Button>
  </Form>
  </Container> 
)
}
