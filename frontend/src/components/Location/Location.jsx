'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Image,
  Rating,
  Button } from 'semantic-ui-react';

import axios from 'axios';
import styles from './Location.scss';

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location.state.location,
      address: props.location.state.address,
      email: ""
    }

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get('/api/review')
			.then( (res) => {
	      this.setState({
          email: res.data.user.email
        });
				console.log("CAN WRITE REVIEW :D " + res.data.user.email);
	    })
			.catch( (err) => {
				console.log(err);
	    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.location}</h1>
        <h4>{this.state.address}</h4>

        <div className="location-rating">
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
                        disabled
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
                          disabled
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
                        Rating 3
                      </div>
                      <Rating
                        className="ui star"
                        defaultRating={3}
                        maxRating={5}
                        disabled
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
                          Rating 4
                        </div>
                        <Rating
                          className="ui star"
                          defaultRating={3}
                          maxRating={5}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="location-btn">
          <Link
            to={{
              pathname: "/review",
              state: {
                location: this.state.location,
                address: this.state.address
              }
            }}
          >
            <Button
              className="ui blue"
              >
              Submit a review for this location!
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Location
