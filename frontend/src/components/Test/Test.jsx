'use strict'
import React, { Component } from 'react';
import _ from 'lodash'
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
  Icon,
  Grid
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
      search: "",
      places: [],
      newPlaces: []
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
    let newSearch = this.state.search.replace(/ /g, '+');
    console.log(newSearch);

    var corsUrl = 'http://localhost:8081/';
    let googleapi = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=';
    let apikey = '&key=AIzaSyBDRH-amNMHWJgOXGFuASOFP7x7EOihKF0';

    var newApiCall = corsUrl + googleapi + newSearch + apikey;
    axios.get(newApiCall).then((response) => {
      console.log(response.data)
      console.log(response.data.results)
      console.log(response.data.results[0].name)
      console.log(response.data.results[0].formatted_address)
      this.setState({
        places: response.data.results
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    })
}

  render() {
    var results = _.map(this.state.places, (place) => {
        // console.log(place.name);
        // console.log(place.photos);
        // console.log("================================");
        let photourl = '';

        if (place.photos == undefined) {
          //console.log(place.name + " is undefined");
          photourl = '.../../assets/knifefork.png';
        }
        else {
          let googlephoto = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photoreference=';
          let key = '&key=AIzaSyBDRH-amNMHWJgOXGFuASOFP7x7EOihKF0';
          photourl = googlephoto + place.photos[0].photo_reference + key;
        }

        //'.../../assets/knifefork.png'
        return (
         <Grid.Column key={place.id}>
           <Image centered size="medium" value={place.id} key={place.id} src={photourl} />
           <br/>
           <Link
             to={{
               pathname: "/location",
               state: {
                 location: place.name,
                 address: place.formatted_address,
                 photo: place.photos
               }
             }}
           >
           {place.name}
           </Link>
           <br/>
           {place.formatted_address}
           <br/>
           <br/>

       </Grid.Column>

        )
      });
    return (
      <div className="Test">
        <NavBar/>
        <h1>Test Component</h1>
        <Input
          placeholder='i.e. Cafes in Champaign'
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
          <br/>
          <span>whitespace</span>
          <Grid className="placeList" relaxed columns={3}>
            <Grid.Row>
                {results}
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Test
