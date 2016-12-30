// Controllers
const Authentication = require('./controllers/authentication');
const Profiles = require('./controllers/profiles');
const Hunts = require('./controllers/hunts');
const Games = require('./controllers/games');

// Authentication
const passportService = require('./services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  // Authentication and User Routes
  // TODO: add /user/forgotpassword route
  app.post('/user/signin', requireSignin, Authentication.signin);
  app.post('/user/signup', Authentication.signup);
  app.delete('/user/profiles/:id', Profiles.deleteUser);
  app.put('/user/profiles/:id', Profiles.editUser);

  // Hunt Routes
  // TODO: add controllers for all
  app.post('/hunt/create', Hunts.createNewHunt);
  app.get('/hunt/user/:id', Hunts.getHuntsByUser);
  app.get('/hunt/all', Hunts.getAllHunts);
  app.get('/hunt/:id', Hunts.getHuntById);
  app.delete('/hunt/:id', Hunts.removeHuntById);
  app.put('/hunt/:id', Hunts.findHuntByIdAndUpdate);
  app.get('/hunt/results/:id', Hunts.getHuntResultsById);

  // Game Routes
  // TODO: add controllers for all
  app.post('/game/create', Games.createNewGame);
  app.put('/game/:id', Games.updateGameState);
}
