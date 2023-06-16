const PastWork = require('../models/pastWork');

module.exports = {
  index,
  show,
};

function index(req, res) {
  res.render('pastWorks/index', {
    pastWorks: PastWork.getAll(),
    title: 'Past Work',
  });
}

function show(req, res) {
  res.render('pastWorks/show', {
    pastWorks: PastWork.getOne(req.params.id),
    title: '',
  });
}
