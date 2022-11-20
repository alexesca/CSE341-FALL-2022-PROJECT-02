const express = require("express");
const router = express.Router();

const controller = require("../controllers/technologies.js");
const validateIdMiddleware = require('./../middlewares/validate-id.middleware.js');
const validateTechnologyMiddleware = require('./../middlewares/validate-technology.middleware.js');

router
    .get("/", controller.index)
    .get("/:_id", validateIdMiddleware.validate, controller.id)
    .post("/", validateTechnologyMiddleware.validate, controller.create)
    .put("/:_id", validateIdMiddleware.validate, validateTechnologyMiddleware.validate, controller.update)
    .delete("/:_id", validateIdMiddleware.validate, controller.delete);

module.exports = router;
