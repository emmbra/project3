import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Header } from 'semantic-ui-react';
import placeholder from '../../assets/group-of-runners.jpg';

export default (props) => (
  <Menu as='h5'>
    <div>
      <img class='heroImage' src={placeholder} alt='heroImage' height='90px' />
    </div>
    <Header
      size='huge'
      position='left'
      style={{
        color: '#fa7a34 ',
        margin: '1em 1em',
        textTransform: 'uppercase',
      }}
    >
      Run to the Sun
    </Header>

    <Menu.Menu position='right'>
      {props.authenticated ? (
        <Menu.Item as={Link} to='/dashboard'>
          <Header style={{ color: '#858585', textTransform: 'uppercase' }}>
            {' '}
            Dashboard
          </Header>{' '}
        </Menu.Item>
      ) : null}
      {props.authenticated ? null : (
        <Menu.Item as={Link} to='/' content='Sign Up'>
          <Header style={{ color: '#858585', textTransform: 'uppercase' }}>
            Sign Up
          </Header>{' '}
        </Menu.Item>
      )}
      {props.authenticated ? (
        <Menu.Item as={Link} to='/signout' content='Sign Out'>
          <Header style={{ color: '#858585', textTransform: 'uppercase' }}>
            Sign Out
          </Header>{' '}
        </Menu.Item>
      ) : (
        <Menu.Item as={Link} to='/signin' content='Sign In'>
          <Header style={{ color: '#858585', textTransform: 'uppercase' }}>
            {' '}
            Sign In
          </Header>{' '}
        </Menu.Item>
      )}
    </Menu.Menu>
  </Menu>
);
