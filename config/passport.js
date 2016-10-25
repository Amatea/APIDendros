'use strict';

var passport        = require('passport');
var LocalStrategy   = require('passport-local').Strategy;
var Account = require('../dbconnection/account');

module.exports = function() {
  
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
  
};