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
        >Submit</Button>

      </div>
    )
  }
}

export default Review
