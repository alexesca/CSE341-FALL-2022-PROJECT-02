const express = require("express");
const router = express.Router();
const passport = require('passport');

const controller = require("../controllers/users.js");
const validateUserMiddleware = require('./../middlewares/validate-user.middleware.js');
const validateIdMiddleware = require('./../middlewares/validate-id.middleware.js');

router
    .get("/login", passport.authenticate('oauth2', {
        session: true,
        successReturnToOrRedirect: '/'
    }));

module.exports = router;
