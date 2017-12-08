'use strict'
import React, { Component } from 'react';
import { Button, Input, Card, Icon, Sidebar, Segment, Menu, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import styles from './TopBar.scss';

class TopBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      visible: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);

  }
  toggleVisibility(){
    this.setState({ visible: !this.state.visible })
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
              <a className="item">Login</a>
            </Link>
            <Link to={"/signup"}>
              <a className="item">Signup</a>
            </Link>
              <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
                  <Sidebar
                    as={Menu}
                    animation='scale down'
                    width='thin'
                    direction='right'
                    visible={visible}
                    icon='labeled'
                    vertical
                    inverted
                  >
                    <Menu.Item name='account'>
                      <Icon name='account' />
                      Home
                    </Menu.Item>
                    <Menu.Item name='settings'>
                      <Icon name='settings' />
                      Games
                    </Menu.Item>
                  </Sidebar>
          </div>
        </div>

      </div>
    )
  }
}

export default TopBar
