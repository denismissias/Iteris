var express = require('express');
var router = express.Router();

/* GET API Index. */
router.get('/', function(req, res, next) {
  res.send('API Index');
});

module.exports = router;