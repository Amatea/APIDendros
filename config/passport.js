'use strict';

var passport        = require('passport');
var LocalStrategy   = require('passport-local-roles').Strategy;
var JsonStrategy = require('passport-json').Strategy;
var config            = require('./db');

module.exports = function() {
  
  
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  config.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});


passport.use(new LocalStrategy(
  function(username, password, role, cb) {
    config.users.findByUsername(username, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));

};