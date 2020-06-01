import React, { Component } from "react";
import { Divider, Container, } from 'semantic-ui-react';
import runningMan from '../../assets/running_stick.png'

export default class Footer extends Component {
  render() {
    return (
      <div className = 'footer'>
        {/* <Container  > */}
          <Divider
            as='h5'
            className='header'
            horizontal
            style={{ color: '#858585', margin: '0.5em 0em', textTransform: 'uppercase' }}
          >
            <p>Created with FUN by: </p>
            <img src={runningMan} alt='logo' height='20px' />
            <a href="https://github.com/emmbra" target="_blank" rel='noreferrer'> Emmett Brady, </a>
            <a href="https://github.com/Tassim" target="_blank" rel='noreferrer'>Tassia Shibuya, & </a>
            <a href="https://github.com/cgleungsf" target="_blank" rel='noreferrer'>Christina Leung </a>
            <img src={runningMan} alt='logo' height='20px' />
          </Divider>
        {/* </Container> */}
      </div>
    );
  }
}
