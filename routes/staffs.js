var express = require('express');
var router = express.Router();

var staffCtrl = require('../controllers/staffs');
/* GET users listing. */
//route -> /pastWorks

router.get('/', staffCtrl.index);

//GET /pastWorks/:id
// router.get('/:id', staffCtrl.show);

module.exports = router;
