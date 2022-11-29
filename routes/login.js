const express = require('express');
const passport = require('passport');
const github = require('./../github.js');
const LoginController = require('./../controllers/login.js');

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

passport.use(github);

/**
 * Router
 * @type {Router}
 */
const router = express.Router();

router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    });


router.get('/github',
    passport.authenticate('github', { scope: [ 'user:email' ] }));


router.get('/logout', function(req, res, next){
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

router.post('/signup', LoginController.signup);

module.exports = router;
