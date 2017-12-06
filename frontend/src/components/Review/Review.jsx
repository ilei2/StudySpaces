'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Review.scss';
import TopBar from '../TopBar/TopBar.jsx';

class Review extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <h1>Review Component</h1>
      </div>
    )
  }
}

export default Review
