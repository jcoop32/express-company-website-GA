var express = require('express');
var router = express.Router();

var pastWorkCtrl = require('../controllers/pastWorks');

//route -> /pastWorks
router.get('/', pastWorkCtrl.index);

//GET /pastWorks/:id
router.get('/:id', pastWorkCtrl.show);

module.exports = router;
