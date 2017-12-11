'use strict'
import React, { Component } from 'react';
import {
  Button,
  Search,
  List,
  Image,
  Input,
  Dropdown,
  Form,
  Checkbox,
  Menu,
  Icon
 }
from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from './Test.scss';
import NavBar from '../NavBar/NavBar.jsx';
import PropTypes from 'prop-types';
import axios from 'axios'


class Test extends Component {
  constructor(props){
    super(props);

    this.state = {
      value: "",
      search: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  handleChange(e, {value}) {
    this.setState({
      value
    });
  }

  handleSearch(e, {value}) {
    this.setState({
      search: value
    })
  }

  submitSearch() {
    console.log("radio selection:");
    console.log(this.state.value);
    console.log("Search text:");
    console.log(this.state.search);

    var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=uiuc&key=AIzaSyBDRH-amNMHWJgOXGFuASOFP7x7EOihKF0';
    axios.get(url).then((response) => {
      console.log(response);
    });
    /*
    var user = gapi.auth2.getAuthInstance().currentUser.get();
    var oauthToken = user.getAuthResponse().access_token;
    var xhr = new XMLHttpRequest();
    xhr.open('GET',
      'https://maps.googleapis.com/maps/api/place/textsearch/json?query=uiuc&key=AIzaSyBDRH-amNMHWJgOXGFuASOFP7x7EOihKF0');
    xhr.setRequestHeader('Authorization',
      'Bearer ' + oauthToken);
    xhr.send(); */
  }

  render() {
    return (
      <div>
        <NavBar/>
        <h1>Test Component</h1>
        <Input
          placeholder='i.e. Cafes near me'
          size='massive'
          onChange={this.handleSearch}
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
            onClick={this.submitSearch}
          >
              Submit
          </Button>
      </div>
    )
  }
}

export default Test
