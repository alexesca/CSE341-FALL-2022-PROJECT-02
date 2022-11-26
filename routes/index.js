var express = require('express');
var router = express.Router();

/* GET home page. */
router.use("/login", require("./login.js"));
router.use("/users", require("./users.js"));
router.use("/technologies", require("./technologies.js"));
router.use("/scripts", require("./scripts.js"));

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Scripts.io' });
});

module.exports = router;
