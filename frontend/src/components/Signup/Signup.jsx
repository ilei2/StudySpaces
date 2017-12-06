'use strict'
import React, { Component } from 'react'
import { Button, Input, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './Signup.scss';
import TopBar from '../TopBar/TopBar.jsx';

class Signup extends Component {

  constructor() {
    super();

    this.state = {
      user: {
        password: '',
        email: ''
      },

      message: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    /*const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;
    const payload = {
      "email": this.state.user.email,
      "password": this.state.user.password
    }

    axios.post('/signup', payload).then(function (response) {
      console.log(response);
      if (response.data.code == 200) {
        console.log("registration successful");
      }
    })
    .catch(function (error) {
      console.log(error);
    });*/
  }

  onChangeEmail(e) {
    const user = this.state.user;
    user.email = e.target.value;
    this.setState({user})
  }

  onChangePassword(e) {
    const user = this.state.user;
    user.password = e.target.value;
    this.setState({user})
  }


  render() {
    return (
      <div>
        <TopBar/>
        <form className="Register test" action="/" onSubmit={this.onSubmit}>
          <Card className="Register__content">
            <div>
              <h1>Register</h1>
              <Input label="Email" onChange={this.onChangeEmail} />
              <br/><br/>
              <Input label="Password" onChange={this.onChangePassword} />
              <br/><br/>
              <p>{this.state.message}</p>
              <Input type="submit" />
              <h4>Already registered? Click <Link to="/login">here</Link> to Log-in!</h4>
            </div>
          </Card>
        </form>
      </div>
    )
  }
}

export default Signup
