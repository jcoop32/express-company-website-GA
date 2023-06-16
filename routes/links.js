var express = require('express');
var router = express.Router();

const linkCtrl = require('../controllers/links');

//GET /links, runs index func
router.get('/', linkCtrl.index);

module.exports = router;
