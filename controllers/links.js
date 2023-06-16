const Link = require('../models/link');

module.exports = {
  index,
};

function index(req, res) {
  res.render('links/index', {
    links: Link.getAll(),
    title: 'Links',
  });
}


