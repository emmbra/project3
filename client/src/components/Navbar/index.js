import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header } from 'semantic-ui-react';
import placeholder from '../../assets/group-of-runners.jpg';

export default (props) => (
  <Menu as='h5'>
    <div>
      <img className='heroImage' src={placeholder} alt='heroImage' height='90px' />
    </div>
    {props.authenticated ? (
      <Header
        size='huge'
        position='left'
        style={{
          color: '#fa7a34 ',
          margin: '1em 1em',
          textTransform: 'uppercase',
        }}
      >
        <a href='/dashboard'
          style={{
            color: '#fa7a34 ',
            margin: '1em 1em',
            textTransform: 'uppercase',
          }}>Run to the Sun</a>
      </Header>
    ) : (
        <Header
          size='huge'
          position='left'
          style={{
            color: '#fa7a34 ',
            margin: '1em 1em',
            textTransform: 'uppercase',
          }}
        >
          <a href='/information'
            style={{
              color: '#fa7a34 ',
              margin: '1em 1em',
              textTransform: 'uppercase',
            }}>Run to the Sun</a>
        </Header>
      )}

    <Menu.Menu position='right'>
      {props.authenticated ? (
        <Menu.Item as={Link} to='/dashboard'>
          <Header style={{ color: '#858585', textTransform: 'uppercase' }}>
            {' '}
            Dashboard
          </Header>{' '}
        </Menu.Item>
      ) : null}
      <Menu.Item as={Link} to='/information'>
        <Header style={{ color: '#858585', textTransform: 'uppercase' }}>
          {' '}
           Info
          </Header>{' '}
      </Menu.Item>

      {props.authenticated ? null : (
        <Menu.Item as={Link} to='/' label='Sign Up'>
          <Header style={{ color: '#858585', textTransform: 'uppercase' }}>
            Sign Up
          </Header>{' '}
        </Menu.Item>
      )}
      {props.authenticated ? (
        <Menu.Item as={Link} to='/signout' label='Sign Out'>
          <Header style={{ color: '#858585', textTransform: 'uppercase' }}>
            Sign Out
          </Header>{' '}
        </Menu.Item>
      ) : (
          <Menu.Item as={Link} to='/signin' label='Sign In'>
            <Header style={{ color: '#858585', textTransform: 'uppercase' }}>
              {' '}
            Sign In
          </Header>{' '}
          </Menu.Item>
        )}
    </Menu.Menu>
  </Menu>
);
