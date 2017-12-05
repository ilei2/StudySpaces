'use strict'
import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link} from 'react-router-dom'

import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';
import Location from './components/Location/Location.jsx';
import Profile from './components/Profile/Profile.jsx';
import ListView from './components/ListView/ListView.jsx';
import Review from './components/Review/Review.jsx';

  render(
    <Router>
      <div>
        <h1>Study Spaces</h1>
        <Route path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/location" component={Location}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/listview" component={ListView}/>
        <Route path="/review" component={Review}/>
      </div>
    </Router>, document.getElementById('app')
  );
