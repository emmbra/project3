import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Divider, Grid, Segment } from "semantic-ui-react";

class Dashboard extends Component {
  state = { activeItem: 'User' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    return (
      <Menu tabular>
        <Menu.Item
          name="User"
          active={activeItem === "User"}
          as={Link}
          to='/user' 
        />
        <Menu.Item
          name="Team"
          active={activeItem === "Team"}
          as={Link}
          to='/team' 
        />
        <Menu.Item
          name="Event"
          active={activeItem === "event"}
          as={Link}
          to='/event'
        />
        <Menu.Item
          name="Records"
          active={activeItem === "Records"}
          as={Link}
          to='/records' 
        />
        <Menu.Item
          name="Exercise Log"
          active={activeItem === "Exercise Log"}
          as={Link}
          to='/exerciselog' 
        />
      </Menu>
    );
  }
}

export default Dashboard;
