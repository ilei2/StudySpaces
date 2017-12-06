'use strict'
import React, { Component } from 'react';
import { Button, Input, Card, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import styles from './TopBar.scss';

class TopBar extends Component {
  render() {
    return (
      <div className="top-bar">
        <div className="ui top fixed menu">
          <Link to={"/"}>
            <div className="item">
              <img src="../../assets/whale.png"/>
            </div>
          </Link>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input
                  type="text"
                  placeholder="Search..."
                  open={false}
                />
              </div>
            </div>
            <Link to={"/login"}>
              <a className="item">Login</a>
            </Link>
            <Link to={"/signup"}>
              <a className="item">Signup</a>
            </Link>
          </div>
        </div>

      </div>
    )
  }
}

export default TopBar
