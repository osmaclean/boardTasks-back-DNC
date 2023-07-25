var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource 50, ' + process.env.TEST);
});

module.exports = router;
