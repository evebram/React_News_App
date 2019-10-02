import React, { Component } from 'react';
import NavBar from './NavBar.js';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <>
       <header>
        <h1>What's Going On</h1>
        <img src="loudspeaker.png" />
       </header>
      </>
    );
  }
}

export default Header;
