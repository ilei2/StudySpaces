'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Rating,
  Form,
  TextArea,
  Button
} from 'semantic-ui-react';

import styles from './Review.scss';

class Review extends Component {
  constructor(props){
      super(props);

      this.state = {
        email: "",
        location: props.location.state.location,
        rating1: 3,
        rating2: 3,
        rating3: 3,
        rating4: 3,
        text: ""
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

  handleFormChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  submitReview(e, {value}) {
    console.log(this.state.location);
    console.log(this.state.rating1);
    console.log(this.state.rating2);
    console.log(this.state.rating3);
    console.log(this.state.rating4);
    console.log(this.state.text);
  }

  componentDidMount() {
    //ideally, setState of the email and location
  }

  render() {
    return (
      <div>
        <h1>Reviewing {this.state.location}</h1>
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

        <Form>
          <label>Enter your review below (500 char limit)</label>
          <TextArea
            placeholder="This place is good/bad because..."
            rows={5}
            onChange={this.handleFormChange}
            maxLength={500}
          />
        </Form>

      </div>
        <Button
          className="blue"
          onClick={this.submitReview}
        >Submit</Button>

      </div>
    )
  }
}

export default Review
