'use strict'
import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link} from 'react-router-dom'

  render(
    <Router>
      <div>
        <h1>Study Spaces</h1>
      </div>
    </Router>, document.getElementById('app')
  );
