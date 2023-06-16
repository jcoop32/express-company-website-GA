var express = require('express');
var router = express.Router();

var staffCtrl = require('../controllers/staffs');

//route -> /staffs
router.get('/', staffCtrl.index);


module.exports = router;
