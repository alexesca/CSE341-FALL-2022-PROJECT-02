const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const LoginController = require('./../controllers/login.js')
const User = require('./../db/models/users');
const crypto = require("crypto");

function verifyPassword(password1, password2) {
    return password1 === password2
}

passport.use(new LocalStrategy(
    function(email, password, done) {
        User.findOne({ email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!verifyPassword(user.password, password)) { return done(null, false); }
            return done(null, user);
        });
    }
));

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
        cb(null, { id: user.id, email: user.email });
    });
});

passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
        return cb(null, user);
    });
});


/**
 * Router
 * @type {Router}
 */
const router = express.Router();



router.get('/', function(req, res, next) {
    res.render('login');
});

router.get('/private', function(req, res, next) {
    res.send({message: "Welcome"});
});

router.get('/error', function(req, res, next) {
    res.send({message: "Unauthorized user!!!"});
});

router.post('/',
    passport.authenticate('local', { failureRedirect: '/login/error' }),
    function(req, res) {
        res.redirect('/');
});

router.get('/signup', function(req, res, next) {
    res.render('signup');
});
router.post('/signup', LoginController.signup);

// router.post('/signup', function(req, res, next) {
    // var salt = crypto.randomBytes(16);
    // crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', );
// });


module.exports = router;
