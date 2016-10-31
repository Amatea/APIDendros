var express = require('express');
var User = require('../../dbconnection/amateappDB/userconection.js');

var amateapprouter = express.Router();

amateapprouter.use(function(req,res,next){
    console.log('something is happening');
    next();
});

amateapprouter.route('/amateapp')
  .get(function(req, res) {
    User.find(function(err, user) {
      if (err) {
        return res.send(err);
      }
        res.json(user);
    });
});

amateapprouter.route('/amateapp')
  .post(function(req, res) {
  var user = new User(req.body);

  user.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'user Added' });
  });
});

amateapprouter.route('/amateapp')
  .get(function(req, res) {
    User.find(function(err, user) {
      if (err) {
        return res.send(err);
      }
      res.json(user);
    });
  })

  .post(function(req, res) {
    var user = new User(req.body);

    user.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'user Added' });
    });
  });

amateapprouter.route('/amateapp/:id')
  .put(function(req,res){
     User.findOne({ _id: req.params.id }, function(err, user) {
        if (err) {
          return res.send(err);
        }

        for (prop in req.body) {
          user[prop] = req.body[prop];
        }
    // save the movie
        user.save(function(err) {
          if (err) {
            return res.send(err);
          }
        res.json({ message: 'user updated!' });
    });
  });
});

amateapprouter.route('/amateapp/:id')
    .get(function(req, res) {
      User.findOne({ _id: req.params.id}, function(err, user) {
        if (err) {
          return res.send(err);
        }
        res.json(user);
  });
});

amateapprouter.route('/amateapp/:id')
    .delete(function(req, res) {
      User.remove({
        _id: req.params.id
      }, function(err, user) {
       if (err) {
         return res.send(err);
      }
    res.json({ message: 'Satisfactoriamente deleted' });
  });
});


module.exports = amateapprouter;