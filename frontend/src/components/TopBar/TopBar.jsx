'use strict'
import React, { Component } from 'react';
import { Button, Input, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import styles from './TopBar.scss';

class TopBar extends Component {
  render() {
    return (
      <div>
        <div className="ui top fixed menu">
          <div className="item">
            <img src="../../assets/whale.png"/>
          </div>
          <div className="right menu">
            <a className="item">Login</a>
            <a className="item">Signup</a>
          </div>
        </div>
      </div>
    )
  }
}

export default TopBar
