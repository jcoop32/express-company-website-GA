const Staff = require('../models/staff');

module.exports = {
  index,
  //   show,
};

function index(req, res) {
  res.render('staffs/index', {
    staffs: Staff.getAll(),
    title: 'Staff',
  });
}

// function show(req, res) {
//   res.render('staffs/show', {
//     staffs: PastWork.getOne(req.params.id),
//     title: '',
//   });
// }
