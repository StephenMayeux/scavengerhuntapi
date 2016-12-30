// Controllers
const Authentication = require('./controllers/authentication');
const Profiles = require('./controllers/profiles');

// Authentication
const passportService = require('./services/passport');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  // Authentication Routes
  // TODO: add /user/forgotpassword route
  app.post('/user/signin', requireSignin, Authentication.signin);
  app.post('/user/signup', Authentication.signup);
  app.delete('/user/profiles/:id', Profiles.deleteUser);
  app.put('/user/profiles/:id', Profiles.editUser);
}
