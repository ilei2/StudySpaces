'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Rating,
  Form,
  TextArea,
  Button
} from 'semantic-ui-react';
//import Rating from 'react-rating';

import styles from './Review.scss';
import TopBar from '../TopBar/TopBar.jsx';

// var Rating = require('react-rating');

class Review extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: "",
<<<<<<< HEAD
      location: "",
=======
>>>>>>> 8ec2e6cc5c334641bbdbe109949d43f6dab4c104
      rating1: 0,
      rating2: 0,
      rating3: 0,
      rating4: 0,
      text: "",
<<<<<<< HEAD
=======
      location: ""
>>>>>>> 8ec2e6cc5c334641bbdbe109949d43f6dab4c104
    }
    this.handleRating1 = this.handleRating1.bind(this);
    this.handleRating2 = this.handleRating2.bind(this);
    this.handleRating3 = this.handleRating3.bind(this);
    this.handleRating4 = this.handleRating4.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  handleRating1(e, {rating}) {
    this.setState({
      rating1: rating
    });
  }

  handleRating2(e, {rating}) {
    this.setState({
      rating2: rating
    });
  }

  handleRating3(e, {rating}) {
    this.setState({
      rating3: rating
    });
  }

  handleRating4(e, {rating}) {
    this.setState({
      rating4: rating
    });
  }

<<<<<<< HEAD
  handleFormChange(e) {
    this.setState({
      text: e.target.value
    });
=======
  handleFormChange(e, {review}) {
    this.setState({
      text: review
    });
    console.log("handleChange");
>>>>>>> 8ec2e6cc5c334641bbdbe109949d43f6dab4c104
  }

  submitReview(e, {value}) {
    console.log(this.state.rating1);
    console.log(this.state.rating2);
    console.log(this.state.rating3);
    console.log(this.state.rating4);
    console.log(this.state.text);
  }

  componentDidMount() {
<<<<<<< HEAD
    //ideally, setState of the email and location
=======
    //ideally, setState of the location
>>>>>>> 8ec2e6cc5c334641bbdbe109949d43f6dab4c104
  }

  render() {
    return (
      <div>
          <TopBar/>
          <h1>Reviewing [Location]</h1>
          <div className="ratings">
          <div className="middle aligned grid">
            <div className="ui items">

              <div className="ui grid">
                <div className="eight wide column">
                  <div className="ui items">
                  <div className="ui item">
                    <div className="middle aligned content">
                      <div className="header">
                        Rating 1
                      </div>
                      <Rating
                        className="ui star"
                        defaultRating={3}
                        maxRating={5}
                        onRate={this.handleRating1}
                      />
                    </div>
                  </div>
                </div>
              </div>

                <div className="eight wide column">
                  <div className="ui items">
                    <div className="ui item">
                      <div className="middle aligned content">
                        <div className="header">
                          Rating 2
                        </div>
                        <Rating
                          className="ui star"
                          defaultRating={3}
                          maxRating={5}
                          onRate={this.handleRating2}
                        />
                      </div>
                    </div>
                  </div>
                </div>

              </div>


              <div className="ui grid">
                <div className="eight wide column">
                  <div className="ui items">
                    <div className="ui item">
                      <div className="middle aligned content">
                        <div className="header">
                          Rating 3:
                        </div>
                        <Rating
                          className="ui star"
                          defaultRating={3}
                          maxRating={5}
                          onRate={this.handleRating3}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="eight wide column">
                  <div className="ui items">
                    <div className="ui item">
                      <div className="middle aligned content">
                        <div className="header">
                          Rating 4:
                        </div>
                        <Rating
                          className="ui star"
                          defaultRating={3}
                          maxRating={5}
                          onRate={this.handleRating4}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

<<<<<<< HEAD
          <div className="text-form">
            <Form>
              <label>Enter your review below (500 char limit)</label>
              <TextArea
                placeholder="This place is good/bad because..."
                rows={5}
                onChange={this.handleFormChange}
                maxLength={500}
              />
            </Form>
=======
          <Form>
            <label>Enter your review below</label>
            <Form.Input
              placeholder="i.e. This place is great because..."
              onChange={this.handleFormChange}
            />
          </Form>

          <div className="ui form">
            <div className="field"
              >
              <label>Enter your review below:</label>
              <textarea rows="5">
              </textarea>
            </div>
>>>>>>> 8ec2e6cc5c334641bbdbe109949d43f6dab4c104
          </div>

        </div>
<<<<<<< HEAD


          <Button
            className="blue"
            onClick={this.submitReview}
          >Submit</Button>

=======
          <Button
            className="blue"
            onClick={this.submitReview}
          >Submit</Button>

>>>>>>> 8ec2e6cc5c334641bbdbe109949d43f6dab4c104
        </div>
    )
  }
}

export default Review
