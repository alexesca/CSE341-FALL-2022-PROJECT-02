const GitHubStrategy = require('passport-github2').Strategy;
const User = require("./db/models/users.js");


module.exports = new GitHubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL
    },
    async function(accessToken, refreshToken, profile, done) {
    const user = await User.findOne({username: profile.username});
    if(!user) {
        const dto = {
            name: profile.displayName,
            username: profile.username
        }
        // Signup user if not found.
        await User.create(dto)
    };
    done(null, profile)
    }
);
