var express = require('express');
var router = express.Router();

var pastWorkCtrl = require('../controllers/pastWorks')
/* GET users listing. */
//route -> /pastWorks

router.get('/', pastWorkCtrl.index)

module.exports = router;
