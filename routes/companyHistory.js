var express = require('express');
var router = express.Router();

/* GET users listing. */
//route -> /companyHistory
router.get('/', function(req, res, next) {
  res.render('companyHistory/index', {
    title: 'Company History'
  })
});

module.exports = router;
