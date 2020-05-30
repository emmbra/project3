import React, { Component } from "react";
import { Divider, Container, } from 'semantic-ui-react';
import runningMan from '../../assets/running-man.jpg'

export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* <Divider inverted section /> */}
        <Container textAlign='center' color='none'>
          <Divider
            as='h5'
            className='header'
            horizontal
            style={{ color: '#858585', margin: '0.5em 0em', textTransform: 'uppercase' }}
          >
            <p>Created with FUN by: </p>
            <img src={runningMan} height='20px' />
            <a href="https://github.com/emmbra" target="_blank"> Emmett Brady, </a>
            <a href="https://github.com/Tassim" target="_blank">Tassia Shibuya, & </a>
            <a href="https://github.com/cgleungsf" target="_blank">Christina Leung </a>
            <img src={runningMan} height='20px' />
          </Divider>

        </Container>
      </div>
    );
  }
}
