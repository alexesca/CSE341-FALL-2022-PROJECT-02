const express = require("express");
const router = express.Router();

const controller = require("../controllers/technologies.js");
const validateIdMiddleware = require('./../middlewares/validate-id.middleware.js');
const validateTechnologyMiddleware = require('./../middlewares/validate-technology.middleware.js');
const ensureAuthenticated = require('./../middlewares/ensure-authenticated.middleware.js');
const bodyUserId = require("./../middlewares/body-user-id.middleware.js");

router
    .get("/", ensureAuthenticated, controller.index)
    .get("/:_id", ensureAuthenticated, validateIdMiddleware.validate, controller.id)
    .post("/", ensureAuthenticated, validateTechnologyMiddleware.validate, bodyUserId.user, controller.create)
    .put("/:_id", ensureAuthenticated, validateIdMiddleware.validate, validateTechnologyMiddleware.validate, controller.update)
    .delete("/:_id", ensureAuthenticated, validateIdMiddleware.validate, controller.delete);

module.exports = router;
