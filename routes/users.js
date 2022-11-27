const express = require("express");
const router = express.Router();
const ensureLogIn = require('connect-ensure-login').ensureLoggedIn;

const controller = require("../controllers/users.js");
const validateUserMiddleware = require('./../middlewares/validate-user.middleware.js');
const validateIdMiddleware = require('./../middlewares/validate-id.middleware.js');

const ensureLoggedIn = ensureLogIn();

router
    .get("/",ensureLoggedIn, controller.index)
    .get("/:_id",ensureLoggedIn, validateIdMiddleware.validate, controller.id)
    .post("/",ensureLoggedIn, validateUserMiddleware.validate, controller.create)
    .put("/:_id",ensureLoggedIn, validateIdMiddleware.validate,  validateUserMiddleware.validate, controller.update)
    .delete("/:_id",ensureLoggedIn, validateIdMiddleware.validate, controller.delete);

module.exports = router;
