var express = require('express');
var User = require('../../dbconnection/amateappDB/userconection.js');

var amateapprouter = express.Router();

amateapprouter.use(function(req,res,next){
    console.log('something is happening');
    next();
});

amateapprouter.route('/amateapp')
  .get(function(req, res) {
    User.find(function(err, tarea) {
      if (err) {
        return res.send(err);
      }
        res.json(tarea);
    });
});

amateapprouter.route('/amateapp')
  .post(function(req, res) {
  var tarea = new User(req.body);

  tarea.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'Tarea Added' });
  });
});

amateapprouter.route('/amateapp')
  .get(function(req, res) {
    User.find(function(err, tarea) {
      if (err) {
        return res.send(err);
      }
      res.json(tarea);
    });
  })

  .post(function(req, res) {
    var tarea = new User(req.body);

    tarea.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'Tarea Added' });
    });
  });

amateapprouter.route('/amateapp/:id')
  .put(function(req,res){
     User.findOne({ _id: req.params.id }, function(err, tarea) {
        if (err) {
          return res.send(err);
        }

        for (prop in req.body) {
          tarea[prop] = req.body[prop];
        }
    // save the movie
        tarea.save(function(err) {
          if (err) {
            return res.send(err);
          }
        res.json({ message: 'Tarea updated!' });
    });
  });
});

amateapprouter.route('/amateapp/:id')
    .get(function(req, res) {
      User.findOne({ _id: req.params.id}, function(err, tarea) {
        if (err) {
          return res.send(err);
        }
        res.json(tarea);
  });
});

amateapprouter.route('/amateapp/:id')
    .delete(function(req, res) {
      User.remove({
        _id: req.params.id
      }, function(err, tarea) {
       if (err) {
         return res.send(err);
      }
    res.json({ message: 'Satisfactoriamente deleted' });
  });
});


module.exports = amateapprouter;