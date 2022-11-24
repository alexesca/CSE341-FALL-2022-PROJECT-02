const express = require('express');
const passport = require('passport');
const github = require('./../github.js');
const loginController = require('./../controllers/login.js');

passport.use(github);

const router = express.Router();

// router.use(passport.initialize());
// router.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

router.get('/', function(req, res){
    res.send({ok: "OK"})
});

router.get('/', passport.authenticate('github', { scope: [ 'user:email' ] }));

router.get('/callback',
    passport.authenticate('github', { failureRedirect: '/',  failureFlash: true }),
    (req, res) =>  res.redirect('/account'));


module.exports = router;
