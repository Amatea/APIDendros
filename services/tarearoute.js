var express = require('express');
var Tarea = require('../dbconnection/tareaconection.js');

var tarearouter = express.Router();

tarearouter.use(function(req,res,next){
    console.log('something is happening');
    next();
});

tarearouter.route('/tareas')
  .get(function(req, res) {
    Tarea.find(function(err, tarea) {
      if (err) {
        return res.send(err);
      }
        res.json(tarea);
    });
});

tarearouter.route('/tareas')
  .post(function(req, res) {
  var tarea = new Tarea(req.body);

  tarea.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'Tarea Added' });
  });
});

tarearouter.route('/tareas')
  .get(function(req, res) {
    Tarea.find(function(err, tarea) {
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

tarearouter.route('/tareas/:id')
  .put(function(req,res){
     Tarea.findOne({ _id: req.params.id }, function(err, tarea) {
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

tarearouter.route('/tareas/:id')
    .get(function(req, res) {
      Tarea.findOne({ _id: req.params.id}, function(err, tarea) {
        if (err) {
          return res.send(err);
        }
        res.json(tarea);
  });
});

tarearouter.route('/tareas/:id')
    .delete(function(req, res) {
      Tarea.remove({
        _id: req.params.id
      }, function(err, tarea) {
       if (err) {
         return res.send(err);
      }
    res.json({ message: 'Satisfactoriamente deleted' });
  });
});


module.exports = tarearouter;