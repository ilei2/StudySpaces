module.exports = function(router, passport) {

/*
    router.post('/signup',
        passport.authenticate('local-signup'),
        function(req, res) {
            console.log("/signup" + req.user.email);
            res.status(200).json({ user: req.user.email
        });
    });
*/

    router.post('/signup', function(req, res, next){
        passport.authenticate('local-signup', function(err, user, info) {
            if (err) {
                return next(err); // Error 500
            }
            if (!user) {
                //Sign up failed
                return res.json(401, { "error": info.message });
            }
            //Signup successful
            res.status(200).json({ user: req.user.email});
        })(req, res, next);
    });


/*
   router.post('/login',
        passport.authenticate('local-login'),
        function(req, res) {
            console.log("/login xxx");
            console.log(req.isAuthenticated());
            res.status(200).json({ user: req.user.email
        });
    });
*/

    router.post('/login', function(req, res, next) {
        passport.authenticate('local-login', function(err, user, info) {
            if (err) {
                return next(err); // Error 500
            }

            if (!user) {
                //Authentication failed
                return res.json(401, { "error": info.message });
            }
            //Authentication successful
            console.log("req--" + req.user);
            //res.status(200).json({ user: req.user.email});
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
                return res.status(200).json({ user: req.user.email});
            });
        })(req, res, next);
    });



    router.get('/profile',
        isLoggedIn,
        function(req, res) {
            console.log(req.isAuthenticated());
            res.status(200).json({ user: req.user, message: "Welcome!"
        });
    });

    router.get('/logout', function(req, res) {
        req.logOut();
        res.status(200).json({ message: "logged out "});
    });

    return router;
}

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    return res.status(401).json({ message: "unable to auth" });
}
