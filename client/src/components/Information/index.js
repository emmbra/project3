import React from 'react';
import {Header, Segment, Divider } from 'semantic-ui-react';

export default (props) => (
  <Segment stacked style={{ maxWidth: 500, marginLeft: 'auto', marginRight: 'auto', marginTop: 50, opacity: '0.9' }} >
    <Header as='h1' style={{ color: '#6e81c3' }}>WELCOME TO RUN TO THE SUN</Header>

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
      A place where you can feel like an virtual olympian without the Olympics. This is a virtual team relay that lets you bring out your competitive side with running events!
      Log in your runs daily and work with a team to achielve the event goals!
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
      Log into Run to the Sun after your runs so you don't forget how much you ran and how long it took. Let Run to the Sun do the rest to track your personal progress and your teams' progress.
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

    <p>Exercise must be intentional! <br />
    Honor system, don't lie.  </p>
    {/* <p>Honor system, don't lie. </p> */}

    {/* <Divider
      as='h2'
      className='header'
      horizontal
      style={{
        color: '#858585',
        margin: '1em 0em',
        textTransform: 'uppercase',
      }}
    >    Future Developments
      </Divider> */}
    {/* <p>
      Add additional workouts that will convert to miles based on intensity.
    </p> */}
  </Segment>
);
