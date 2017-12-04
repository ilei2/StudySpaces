'use strict'
import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link} from 'react-router-dom'

import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';

  render(
    <Router>
      <div>
        <h1>Study Spaces</h1>

        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
      </div>
    </Router>, document.getElementById('app')
  );
