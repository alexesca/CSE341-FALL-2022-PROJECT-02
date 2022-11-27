const express = require('express');
const router = express.Router();
const ScriptsMiddleware = require('./../middlewares/fetch-scripts.middleware.js');
const TechnologiesMiddleware = require('./../middlewares/fetch-technologies.middleware.js');

/* GET home page. */
router.use("/login", require("./login.js"));
router.use("/users", require("./users.js"));
router.use("/technologies", require("./technologies.js"));
router.use("/scripts", require("./scripts.js"));

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.user) { return res.render('home'); }
  next();
}, ScriptsMiddleware.fetch, TechnologiesMiddleware.fetch, function(req, res, next) {
  res.render('index', { user: req.user });
});

module.exports = router;
