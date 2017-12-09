'use strict'
import React, { Component } from 'react';
import { Item, Button, Input, Card, Icon, Sidebar, Segment, Menu, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import styles from './TopBar.scss';

class TopBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    const { visible } = this.state
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
              <Item className="item">Login</Item>
            </Link>
            <Link to={"/signup"}>
              <Item className="item">Signup</Item>
            </Link>
          </div>
        </div>

      </div>
    )
  }
}

export default TopBar
