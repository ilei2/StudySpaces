'use strict'
import React, { Component } from 'react';
import {
  Button,
  Search,
  List,
  Image,
  Dropdown,
  Form,
  Checkbox,
  Menu
 }
from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from './Home.scss';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, {value}) {
    this.setState({
      value
    });
  }

  render() {
    return (
      <div>
        <div className="ui top fixed menu">
          <div className="item">
            <img src="../../assets/whale.png"/>
          </div>
          <a className="item">Something</a>
          <a className="item">Login</a>
          <a className="item">Signup</a>
        </div>
        <h1>Home Component</h1>
        <Search
          placeholder='i.e. Cafes near me'
          open={false}
        />
          <Form className="ui home-form">
            <Form.Field>
              <Checkbox
                radio
                label="quiet"
                name="first"
                value='quiet'
                checked={this.state.value === 'quiet'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label="busy"
                name="second"
                value='busy'
                checked={this.state.value === 'busy'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label="wifi"
                name="third"
                value='wifi'
                checked={this.state.value === 'wifi'}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label="group"
                name="fourth"
                value='group'
                checked={this.state.value === 'group'}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form>
          <Button
            color="grey"
            className="ui home-submit-btn"
          >
              Submit
          </Button>
      </div>
    )
  }
}

export default Home
