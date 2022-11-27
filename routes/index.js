var express = require('express');
var router = express.Router();

/* GET home page. */
router.use("/login", require("./login.js"));
router.use("/users", require("./users.js"));
router.use("/technologies", require("./technologies.js"));
router.use("/scripts", require("./scripts.js"));

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.user) { return res.render('home'); }
  next();
}, function(req, res, next) {
  res.render('index', { user: req.user });
});

module.exports = router;
