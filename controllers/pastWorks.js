const PastWork = require('../models/pastWork')

module.exports = {
    index
}

function index(req, res){
    res.render('pastWorks/index', {
        pastWorks: PastWork.getAll(),
        title: 'Past Work'
    })
}

