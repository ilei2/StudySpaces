'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './ListView.scss';
import TopBar from '../TopBar/TopBar.jsx';

class ListView extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <h1>ListView Component</h1>
      </div>
    )
  }
}

export default ListView
