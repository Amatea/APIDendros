
var express = require('express');
var myUsers = require('../modules/mymodule.js');
var passport        = require('passport');
var LocalStrategy   = require('passport-local').Strategy;

var router = express.Router();

passport.use(new LocalStrategy(
  function(username, password, done) {
    if (username === "a" && password === "a") // nombre
      return done(null, {name: "admin"});

    return done(null, false, { message: 'Usuario Incorrecto' });
  }
));

// Serialized and deserialized methods when got from session
passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

var auth        = function(req, res, next){
                    if (!req.isAuthenticated()) 
                        res.send(401);
                    else
                    next();
                    };

router.use(function(req,res,next){
    console.log('something is happening');
    next();
});

router.post('/display',function(req,res){
    myUsers.display(req,function(result){
        console.log(result);
        res.send(result);
   });

});

router.post('/editUser', function(req, res) {
    myUsers.editUser(req, function(result) {
        res.send(result);
    });
});

router.post('/addUser',function(req,res){
    myUsers.addUser(req, function(result) {
        res.send(result);
    });
});

router.post('/deleteUser',function(req,res){
    myUsers.deleteUser(req, function(result) {
        res.send(result);
    });
});

router.use(function(req,res,next){
    console.log('something is happening');
    next();
});

router.get('/',function(req,res){
        res.send('index.html', { title: 'Dendros' });

});
router.get('/users', auth, function(req, res){
  res.send([{name: "user1"}, {name: "user2"}]);
});

router.get('/loggedin', function(req, res) {
  res.send(req.isAuthenticated() ? req.user : '0');
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.send(req.user);
});

// route to log out
router.post('/logout', function(req, res){
  req.logOut();
  res.send(200);
});

module.exports = router;