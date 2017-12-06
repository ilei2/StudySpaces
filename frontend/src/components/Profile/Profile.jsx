'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Profile.scss';
import TopBar from '../TopBar/TopBar.jsx';

class Profile extends Component {
  render() {
    return (
      <div>
        <TopBar/>
        <h1>Profile Component</h1>
      </div>
    )
  }
}

export default Profile
