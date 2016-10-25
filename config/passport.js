'use strict';

var passport        = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var User            = require('./config');

module.exports = function() {
  
  //Usar el método 'serializeUser' para serializar la id del usuario
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});


passport.use(new LocalStrategy(
  function(username, password, done) {
    if (username === "amatea" && password === "dendros1320") // nombre
      return done(null, {name: "admin"});

    return done(null, false, { message: 'Usuario Incorrecto' });
  }
));

var auth = function(req, res, next){
  if (!req.isAuthenticated()) 
      res.send(401);
  else
  next();
  };
  
};