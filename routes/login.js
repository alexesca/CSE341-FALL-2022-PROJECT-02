const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const LoginController = require('./../controllers/login.js')
const User = require('./../db/models/users');
const crypto = require("crypto");
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



//
// passport.use(new LocalStrategy(
//     function(email, password, done) {
//         User.findOne({ email }, function (err, user) {
//             if (err) { return done(err); }
//             if (!user) { return done(null, false); }
//             if (!verifyPassword(user.password, password)) { return done(null, false); }
//             return done(null, user);
//         });
//     }
// ));

// passport.serializeUser(function(user, cb) {
//     process.nextTick(function() {
//         cb(null, { id: user.id, email: user.email });
//     });
// });
//
// passport.deserializeUser(function(user, cb) {
//     process.nextTick(function() {
//         return cb(null, user);
//     });
// });
//
//

//
//
//
// router.get('/', function(req, res, next) {
//     res.render('login');
// });
//
router.get('/private', function(req, res, next) {
    res.send({message: "Welcome"});
});

router.get('/error', function(req, res, next) {
    res.send({message: "Unauthorized user!!!"});
});
//
// router.post('/',
//     passport.authenticate('local', { failureRedirect: '/login/error' }),
//     function(req, res) {
//         res.redirect('/');
// });
//
// router.get('/signup', function(req, res, next) {
//     res.render('signup');
// });
// router.post('/signup', LoginController.signup);

// router.post('/signup', function(req, res, next) {
    // var salt = crypto.randomBytes(16);
    // crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', );
// });


module.exports = router;
