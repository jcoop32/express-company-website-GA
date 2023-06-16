var express = require('express');
var router = express.Router();

/* GET users listing. */
//route -> /pastWorks
router.get('/', function (req, res, next) {
  res.render('pastWorks/index', {
    title: 'Past Work',
  });
});

module.exports = router;
