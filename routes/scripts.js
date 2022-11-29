const express = require("express");
const router = express.Router();

const controller = require("../controllers/scripts.js");
const validateIdMiddleware = require('./../middlewares/validate-id.middleware.js');
const ensureAuthenticated = require('./../middlewares/ensure-authenticated.middleware.js');
const bodyUserId = require('./../middlewares/body-user-id.middleware.js');

router
    .get("/:_id",ensureAuthenticated, validateIdMiddleware.validate,  controller.id)
    .get("/", ensureAuthenticated, controller.index)
    .post("/", ensureAuthenticated, bodyUserId.user, controller.create)
    .put("/:_id",ensureAuthenticated, validateIdMiddleware.validate,  controller.update)
    .delete("/:_id",ensureAuthenticated, validateIdMiddleware.validate,  controller.delete);

module.exports = router;
