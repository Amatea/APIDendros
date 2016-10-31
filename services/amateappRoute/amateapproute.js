var express = require('express');
var User = require('../../dbconnection/amateappDB/userconection.js');

var tarearouter = express.Router();

tarearouter.use(function(req,res,next){
    console.log('something is happening');
    next();
});

tarearouter.route('/user')
  .get(function(req, res) {
    User.find(function(err, tarea) {
      if (err) {
        return res.send(err);
      }
        res.json(tarea);
    });
});

tarearouter.route('/user')
  .post(function(req, res) {
  var tarea = new Tarea(req.body);

  tarea.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'Tarea Added' });
  });
});

tarearouter.route('/user')
  .get(function(req, res) {
    User.find(function(err, tarea) {
      if (err) {
        return res.send(err);
      }
      res.json(tarea);
    });
  })

  .post(function(req, res) {
    var tarea = new Tarea(req.body);

    tarea.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'Tarea Added' });
    });
  });

tarearouter.route('/user/:id')
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

tarearouter.route('/user/:id')
    .get(function(req, res) {
      User.findOne({ _id: req.params.id}, function(err, tarea) {
        if (err) {
          return res.send(err);
        }
        res.json(tarea);
  });
});

tarearouter.route('/user/:id')
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


module.exports = tarearouter;