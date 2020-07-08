var passport = require('passport'),
  GoogleStrategy = require('passport-google-oauth2').Strategy;

//var verifyHandler = function(req, token, tokenSecret, profile, done) {
var verifyHandler = function (accessToken, refreshToken, profile, cb, done) {

  var data = {
    id: cb.id,
    name: cb.displayName,
    email: cb.emails[0].value,
    emailVerified: cb.emails[0].verified
  };

  return done(null, data);
};

passport.use(new GoogleStrategy({
  clientID: '986631321216-n48rdct7h242bhiveccrobds87j5vhr4.apps.googleusercontent.com',
  clientSecret: '2OKD4EI2Ntq-zSBUxfzRPHTF',
  callbackURL: '/api/v1/auth/google/callback',
  passReqToCallback: true
}, verifyHandler));