var express = require('express');
var router = express.Router();

//route -> /contacts
router.get('/', function (req, res, next) {
  //render page for contact index page
  res.render('contacts/index', {
    title: 'Contact',
  });
});

module.exports = router;
