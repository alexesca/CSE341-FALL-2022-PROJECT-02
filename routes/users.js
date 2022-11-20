const express = require("express");
const router = express.Router();

const controller = require("../controllers/users.js");
const validateUserMiddleware = require('./../middlewares/validate-user.middleware.js');

router
    .get("/", controller.index)
    .get("/:_id", controller.id)
    .post("/", validateUserMiddleware.validate, controller.create)
    .put("/:_id", validateUserMiddleware.validate, controller.update)
    .delete("/:_id", controller.delete);

module.exports = router;
