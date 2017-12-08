'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Rating,
  Form,
  Button
} from 'semantic-ui-react';

import styles from './Review.scss';
import TopBar from '../TopBar/TopBar.jsx';

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
    //this.componentDidMount = this.componentDidMount.bind(this);
    this.saveReview = this.saveReview.bind(this);
  }

  saveReview() {

  }

  // componentDidMount() {
  //   //ideally, setState of the location
  // }

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
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
          onSubmit={this.saveReview}
        >Submit</Button>

      </div>
    )
  }
}

export default Review
