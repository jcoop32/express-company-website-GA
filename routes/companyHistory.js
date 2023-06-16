var express = require('express');
var router = express.Router();

//route -> /companyHistory
router.get('/', function(req, res, next) {
  //render index page for company info
  res.render('companyHistory/index', {
    title: 'Company History'
  })
});

module.exports = router;
