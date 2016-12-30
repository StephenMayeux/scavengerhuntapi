const User = require('../models/user');

exports.editUser = function(req, res, next) {
  const { id } = req.params;
  const { firstname, lastname } = req.body;

  User.findByIdAndUpdate(id, { firstname, lastname }, { new: true }, (err, profile) => {
    if (err) return next(err);
    res.send({ profile, success: true, message: 'Profile has been updated' });
  });
}

exports.deleteUser = function(req, res, next) {
  const { id } = req.params;

  User.findByIdAndRemove(id, (err, profile) => {
    if (err) return next(err);
    res.send({ profile, success: true, message: 'Your profile has been permanently deleted' });
  });
}
