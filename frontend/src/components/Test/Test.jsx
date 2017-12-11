'use strict'
import React, { Component } from 'react';
import { Header, Image, Card, Icon, Table, Rating, Dropdown, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import styles from './Test.scss';
import NavBar from '../NavBar/NavBar.jsx';

class Test extends Component {
  render() {
    return (
      <div className="ui container center aligned">
        <NavBar/>
        <h1>Test Component</h1>
        </div>
      )
    }
  }

  export default Test
