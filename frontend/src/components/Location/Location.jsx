'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Location.scss';
import TopBar from '../TopBar/TopBar.jsx';

class Location extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <h1>Location Component</h1>
      </div>
    )
  }
}

export default Location
