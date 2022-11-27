const GitHubStrategy = require('passport-github2').Strategy;
const User = require('./db/models/users.js');


module.exports = new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL
    },
    function(accessToken, refreshToken, profile, done) {
        done(null, profile)
    }
);
