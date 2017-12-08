'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  Button
} from 'semantic-ui-react';
import Rating from 'react-rating';

import styles from './Review.scss';
import TopBar from '../TopBar/TopBar.jsx';

// var Rating = require('react-rating');

class Review extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
      rating1: 0,
      rating2: 0,
      rating3: 0,
      rating4: 0,
      text: "",
      location: ""
    }
    this.updateRating1 = this.updateRating1.bind(this);
    // this.updateRating2 = this.updateRating2.bind(this);
    // this.updateRating3 = this.updateRating3.bind(this);
    // this.updateRating4 = this.updateRating4.bind(this);
    this.saveReview = this.saveReview.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  updateRating1(rate) {
    // this.setState({
    //   rating1: value
    // });
    alert(rate);
  }

  saveReview(e, {value}) {
    console.log("saving review");
  }

  componentDidMount() {
    //ideally, setState of the location
  }

  render() {
    return (
      <div>
        <TopBar/>
        <h1>Reviewing [Location]</h1>

        <div className="ratings">
          <Rating
            fractions={2}
            onChange={(rate) => this.updateRating1(rate)}
          />
          <div className="ui form">
            <div className="field">
              <label>Enter your review below:</label>
              <textarea rows="5">
              </textarea>
            </div>
          </div>
        </div>
        <Button
          className="blue"
          onClick={this.saveReview}
        >
          Submit</Button>

      </div>
    )
  }
}

export default Review
