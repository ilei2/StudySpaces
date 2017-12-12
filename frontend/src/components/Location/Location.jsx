'use strict'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Image,
  Rating,
  Button } from 'semantic-ui-react';

import styles from './Location.scss';

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location.state.location,
      address: props.location.state.address,
      photo: props.location.state.photo
    }
  }

  render() {
    console.log("LOCATION PAGE: ");

    let photourl = '';

    if (this.state.photo == undefined) {
      //console.log(place.name + " is undefined");
      photourl = '.../../assets/knifefork.png';
    }
    else {
      let googlephoto = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&maxheight=400&photoreference=';
      let key = '&key=AIzaSyBDRH-amNMHWJgOXGFuASOFP7x7EOihKF0';
      photourl = googlephoto + this.state.photo[0].photo_reference + key;
    }


    return (
      <div>
        <h1>{this.state.location}</h1>
        <h4>{this.state.address}</h4>
        <Image src={photourl}/>

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

        <Link
          to={{
            pathname: "/review",
            state: {
              location: this.state.location
            }
          }}
        >
          <Button
            className=" ui blue"
            >
            Submit a review for this location!
          </Button>
        </Link>
      </div>
    )
  }
}

export default Location
