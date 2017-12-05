import React, { Component } from 'react'
import { Button, Input, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import axios from 'axios'

import styles from './Login.scss';


class Login extends Component {

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

    const email = encodeURIComponent(this.state.user.email);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `email=${email}&password=${password}`;
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
      <form className="Login" action="/" onSubmit={this.onSubmit}>
        <Card className="Login__content">
          <div>
            <h1>Login</h1>
            <Input label="Email" onChange={this.onChangeEmail} />
            <br/><br/>
            <Input label="Password" onChange={this.onChangePassword} />
            <br/><br/>

            <p>{this.state.message}</p>
            <Input type="submit" />
            <h4>No account? Sign up <Link to="/register">here</Link></h4>

          </div>
        </Card>
      </form>
    )
  }
}

export default Login
