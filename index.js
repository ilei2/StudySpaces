const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport')
const config = require('./config');
const User = require('./')
const router = express.Router();
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');

app.use(express.static('./backend/static/'));
app.use(express.static('./frontend/dist/'));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Static routes
/*
app.route('/').get(function(req, res) {
  return res.sendFile(path.join(__dirname, './backend/static/index.html'));
});
*/
/*
app.route('/login').get(function(req, res) {
  return res.sendFile(path.join(__dirname, './backend/static/index.html'));
});
app.route('/register').get(function(req, res) {
  return res.sendFile(path.join(__dirname, './backend/static/index.html'));
});
app.route('/dashboard').get(function(req,res) {
  return res.sendFile(path.join(__dirname, './backend/static/index.html'));
})
*/

/* New things ================================================================ */

require('./backend/models').connect(config.dbUri);
require('./backend/auth/passport')(passport);

// Initialize cookie sessions
app.use(cookieParser());
app.use(cookieSession({
  keys: ['asdf', 'asdf']
}));

// Initialize Passport
app.use(passport.initialize()); // Create an instance of Passport
app.use(passport.session());

app.use(express({secret: "cs498finalproject"}));
// Get our routes
app.use('/api', require('./backend/routes/api')(router, passport));

/* =========================================================================== */

// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});

