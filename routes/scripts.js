const express = require("express");
const router = express.Router();

const controller = require("../controllers/scripts.js");
const validateIdMiddleware = require('./../middlewares/validate-id.middleware.js');
const technologiesMiddleware = require('./../middlewares/fetch-technologies.middleware.js');
const ensureAuthenticated = require('./../middlewares/ensure-authenticated.middleware.js');


router
    .get("/:_id",ensureAuthenticated, validateIdMiddleware.validate,  controller.id)
    .get("/", ensureAuthenticated, controller.index)
    .post("/", ensureAuthenticated, controller.create)
    .put("/:_id",ensureAuthenticated, validateIdMiddleware.validate,  controller.update)
    .post("/:_id",ensureAuthenticated, validateIdMiddleware.validate,  controller.delete);

module.exports = router;
