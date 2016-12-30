const Game = require('../models/game');

exports.createNewGame = function(req, res, next) {
  const { students, hunt_id  } = req.body;
  const game = new Game({
    students,
    hunt_id
  });
  game.save((err, game) => {
    if (err) return next(err);
    res.send({ game, success: true, message: 'You have started a new game!' });
  });
}

exports.updateGameStateById = function(req, res, next) {
  const { id } = req.params;
  const { students, responses } = req.body;
  Game.findByIdAndUpdate(id, { students, responses, completed: true }, { new: true }, (err, game) => {
    if (err) return next(err);
    res.send({ game, success: true, message: 'You have submitted your game to the teacher!' });
  });
}
