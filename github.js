const GitHubStrategy = require('passport-github2').Strategy;
const User = require('./db/models/users.js');


module.exports = new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL
    },
    function(accessToken, refreshToken, profile, done) {

        User.findOne({githubId: profile.id }).then((data, err) => {

            if (!data) return User.create({
                firstName: profile.id,
                lastName: profile.displayName,
                email: profile._json.email,
            }).then((data, err) => {
                return done(null, data);
            });

            else return done(null, data);
        });

    }
);
