var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Avatar Builder', btnTitle: 'Switch avatar (idle or talking)' });
});

module.exports = router;
