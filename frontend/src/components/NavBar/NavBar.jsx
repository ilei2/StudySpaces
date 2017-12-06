'use strict'
import React, { Component } from 'react';
import {
  Button,
  Search,
  List,
  Dropdown,
  Menu
 }
from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from './Navbar.scss';

class NavBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: ""
    };

  }

  render() {
    return (
      <div className="ui top fixed menu">
        <div className="item">
          <img src="../../assets/whale.png"/>
        </div>
        <a className="item">Something</a>
        <a className="item">Login</a>
        <a className="item">Signup</a>
      </div>
    )
  }

}

export default Navbar
