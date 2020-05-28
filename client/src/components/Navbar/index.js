import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default (props) => (
  <Menu>
    <Menu.Menu position='right'>
    { props.authenticated ? <Menu.Item as={Link} to='/dashboard' content='Dashboard'/> : null}
    { props.authenticated ? null : <Menu.Item as={Link} to='/' content='Sign Up'/> }
    { props.authenticated ?  <Menu.Item as={Link} to='/signout' content='Sign Out'/> : <Menu.Item as={Link} to='/signin' content='Sign In'/>}
    
    {/* <Menu.Item as={Link} to='/teamsignup' content='TeamSignUp'/> */}
    {/* <Menu.Item as={Link} to='/alltodos' content='Get All Todos'/> */}
    </Menu.Menu>
  </Menu>
);
