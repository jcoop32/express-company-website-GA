var express = require('express');
var router = express.Router();

const linkCtrl = require('../controllers/links');

/* GET home page. */
router.get('/', linkCtrl.index);
module.exports = router;
