const express = require('express');
const passport = require('passport');
const github = require('./../github.js');


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

router.get('/private', function(req, res, next) {
    res.send({message: "Welcome"});
});

router.get('/error', function(req, res, next) {
    res.send({message: "Unauthorized user!!!"});
});

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = router;
