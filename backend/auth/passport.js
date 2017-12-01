var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

/**
* Specifies what strategy we'll use
*/
module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // Registration Strategy
    passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
    },
    function(email, password, done) {
        User.findOne({'email' : email}, function(err, user) {
            if ( err ) {
                return done(err);
            } else if ( user ) {
                console.log('user' + user + 'exists already');
                return done(null, false, {message: 'User exists already.'});
            } else {
                var newUser = new User();

                newUser.email = email;
                newUser.password = newUser.generateHash(password);

                newUser.save(function(err) {
                    return done(null, newUser);
                });
            }
        });
    }));

    // Login Strategy
    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
    },
    function(email, password, done) {
        console.log("In use");
        User.findOne({'email': email}, function(err, user) {
            if ( err ) {
                return done(err);
            } else if ( !user) {
                return done(null, false, {message: 'Incorrect username.'});
            } else if (!user.validPassword(password) ) {
                console.log("in local-login login failed");
                return done(null, false, {message: 'Incorrect password.'});
            }

            console.log('verify is done');
            return done(null, user);
        });
    }));
};
