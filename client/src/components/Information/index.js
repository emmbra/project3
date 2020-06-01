import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header, Segment, Divider } from 'semantic-ui-react';

export default (props) => (
  <Segment stacked style={{ maxWidth: 500, marginLeft: 'auto', marginRight: 'auto', marginTop: 50, opacity: '0.9' }} >
    <Header as = 'h1' style = {{color:'#6e81c3' }}>WELCOME TO RUN TO THE SUN</Header>
    <p>
    </p>
    <Divider
      as='h2'
      className='header'
      horizontal
      style={{
        color: '#858585',
        margin: '1em 0em',
        textTransform: 'uppercase',
      }}
    >
      Goals
        </Divider>
    <p>
      A virtual team relay that lets you bring out your competitive side with running events!
      Log in your runs daily or weekly and work with a team to achielve the event goals!
    </p>
    <Divider
      as='h2'
      className='header'
      horizontal
      style={{
        color: '#858585',
        margin: '1em 0em',
        textTransform: 'uppercase',
      }}
    >
      How-To
        </Divider>
    <p>
      A virtual team relay that lets you bring our your competitive style with running events!
    </p>
    <Divider
      as='h2'
      className='header'
      horizontal
      style={{
        color: '#858585',
        margin: '1em 0em',
        textTransform: 'uppercase',
      }}
    > Rules
    </Divider>
    <p>
      Exercise must be intentional!
      </p>

    <Divider
      as='h2'
      className='header'
      horizontal
      style={{
        color: '#858585',
        margin: '1em 0em',
        textTransform: 'uppercase',
      }}
    >    Future Developments
      </Divider>
    <p>
      Add additional workouts that will convert to miles based on intensity.
    </p>
  </Segment>
);
