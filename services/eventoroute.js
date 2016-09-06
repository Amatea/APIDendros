var express = require('express');
var Evento = require('../dbconnection/eventoconection.js');

var eventorouter = express.Router();

eventorouter.use(function(req,res,next){
    console.log('something is happening');
    next();
});

eventorouter.route('/eventos')
  .get(function(req, res) {
    Evento.find(function(err, evento) {
      if (err) {
        return res.send(err);
      }
        res.json(evento);
    });
});

eventorouter.route('/eventos')
  .post(function(req, res) {
  var evento = new Evento(req.body);

  evento.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'Evento Added' });
  });
});

eventorouter.route('/eventos')
  .get(function(req, res) {
    Evento.find(function(err, evento) {
      if (err) {
        return res.send(err);
      }
      res.json(evento);
    });
  })

  .post(function(req, res) {
    var evento = new Evento(req.body);

    evento.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'Evento Added' });
    });
  });

eventorouter.route('/eventos/:id')
  .put(function(req,res){
     Evento.findOne({ _id: req.params.id }, function(err, evento) {
        if (err) {
          return res.send(err);
        }

        for (prop in req.body) {
          evento[prop] = req.body[prop];
        }
    // save the movie
        evento.save(function(err) {
          if (err) {
            return res.send(err);
          }
        res.json({ message: 'Evento updated!' });
    });
  });
});

eventorouter.route('/eventos/:id')
    .get(function(req, res) {
      Evento.findOne({ _id: req.params.id}, function(err, evento) {
        if (err) {
          return res.send(err);
        }
        res.json(evento);
  });
});

eventorouter.route('/eventos/:id')
    .delete(function(req, res) {
      Evento.remove({
        _id: req.params.id
      }, function(err, evento) {
       if (err) {
         return res.send(err);
      }
    res.json({ message: 'Satisfactoriamente deleted' });
  });
});


module.exports = eventorouter;