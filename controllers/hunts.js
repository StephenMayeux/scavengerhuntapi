const Hunt = require('../models/hunt');
const Game = require('../models/game');

exports.createNewHunt = function(req, res, next) {
  const { user_id, title, link, questions } = req.body;
  Hunt.findOne({ link }, (err, existingHunt) => {
    if (err) return next(err);
    if (existingHunt) {
      return res.send({ success: false, message: 'Your share link has already been taken', hunt: existingHunt });
    }
    const hunt = new Hunt({
      user_id,
      title,
      link,
      questions
    });
    hunt.save(err => {
      if (err) return next(err);
      res.send({ success: true, message: 'You have saved your hunt!', hunt });
    });
  });
}

exports.getHuntsByUser = function(req, res, next) {
  const { id } = req.params.id;
  Hunt.find({ user_id: id }, (err, hunts) => {
    if (err) return next(err);
    res.send({ hunts, success: true, message: 'Found hunts by user_id' });
  });
}

exports.getAllHunts = function(req, res, next) {
  Hunt.find({}, (err, hunts) => {
    if (err) return next(err);
    res.send({ hunts, success: true, message: 'Fetched all the hunts' });
  });
}

exports.getHuntById = function(req, res, next)  {
  const { id } = req.params;
  Hunt.findById(id, (err, hunt) => {
    if (err) return next(err);
    res.send({ hunt, success: true, success: 'Fetched hunt by Id' });
  });
}

exports.removeHuntById = function(req, res, next) {
  const { id } = req.params;
  Hunt.findByIdAndRemove(id, (err, hunt) => {
    if (err) return next(err);
    res.send({ success: true, message: 'You have deleted your hunt' });
  });
}

exports.findHuntByIdAndUpdate = function(req, res, next) {
  const { id } = req.params;
  const { title, questions } = req.body;
  Hunt.findHuntByIdAndUpdate(id, { title, questions }, { new: true }, (err, hunt) => {
    if (err) return next(err);
    res.send({ hunt, success: true, message: 'You have updated your hunt' });
  });
}

exports.getHuntResultsById = function(req, res, next) {
  const { id } = req.params;
  Game.find({ hunt_id: id, completed: true }, (err, results) => {
    if (err) return next(err);
    res.send({ results, success: true, message: 'You have fetched results' });
  });
}
