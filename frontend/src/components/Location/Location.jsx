'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Rating, Button } from 'semantic-ui-react';

import styles from './Location.scss';
import TopBar from '../TopBar/TopBar.jsx';

class Location extends Component {

  render() {
    return (
      <div>
        <TopBar/>
        <h1>Location Name</h1>
        <h4>Address</h4>
        <h3>Type of Place</h3>

          <div className="middle aligned grid ratings">
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
                          Rating 3:
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
                          Rating 4:
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
        <Link to={"/review"}>
          <Button>
            Submit a review for this location!
          </Button>
        </Link>
      </div>
    )
  }
}

export default Location
