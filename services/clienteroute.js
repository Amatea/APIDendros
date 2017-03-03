var express = require('express');
var Cliente = require('../dbconnection/clienteconection.js');

var clienteroute = express.Router();


clienteroute.route('/clientes')
  .get(function(req, res) {
    Cliente.find(function(err, cliente) {
      if (err) {
        return res.send(err);
      }
      res.json(cliente);
    });
  })

  .post(function(req, res) {
    var cliente = new Cliente(req.body);

    cliente.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'Cliente Added' });
    });
  });

clienteroute.route('/clientes/:id')
  .put(function(req,res){
     Cliente.findOne({ _id: req.params.id }, function(err, cliente) {
        if (err) {
          return res.send(err);
        }

        for (prop in req.body) {
          cliente[prop] = req.body[prop];
        }
   
        cliente.save(function(err) {
          if (err) {
            return res.send(err);
          }
        res.json({ message: 'cliente updated!' });
    });
  });
});

clienteroute.route('/clientes/:id')
    .get(function(req, res) {
      Cliente.findOne({ _id: req.params.id}, function(err, cliente) {
        if (err) {
          return res.send(err);
        }
        res.json(cliente);
  });
});

clienteroute.route('/clientes/:id')
    .delete(function(req, res) {
      Cliente.remove({
        _id: req.params.id
      }, function(err, cliente) {
       if (err) {
         return res.send(err);
      }
    res.json({ message: 'Satisfactoriamente deleted' });
  });
});

module.exports = clienteroute;