const express = require("express");
const router = express.Router();

const controller = require("../controllers/scripts.js");
const validateIdMiddleware = require('./../middlewares/validate-id.middleware.js');

router
    .get("/new", controller.new)
    .get("/:_id",validateIdMiddleware.validate,  controller.id)
    .get("/", controller.index)
    .post("/", controller.create)
    .put("/:_id",validateIdMiddleware.validate,  controller.update)
    .delete("/:_id",validateIdMiddleware.validate,  controller.delete);

module.exports = router;
