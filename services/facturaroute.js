var express = require('express');
var Factura = require('../dbconnection/facturaconection.js');

var facturarouter = express.Router();

facturarouter.use(function(req,res,next){
    console.log('something is happening');
    next();
});

facturarouter.route('/facturas')
  .get(function(req, res) {
    Factura.find(function(err, factura) {
      if (err) {
        return res.send(err);
      }
        res.json(factura);
    });
});

facturarouter.route('/facturas')
  .post(function(req, res) {
  var factura = new Factura(req.body);

  factura.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'Factura Added' });
  });
});

facturarouter.route('/facturas')
  .get(function(req, res) {
    Factura.find(function(err, factura) {
      if (err) {
        return res.send(err);
      }
      res.json(factura);
    });
  })

  .post(function(req, res) {
    var factura = new Factura(req.body);

    factura.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'Factura Added' });
    });
  });

facturarouter.route('/facturas/:id')
  .put(function(req,res){
     Factura.findOne({ _id: req.params.id }, function(err, factura) {
        if (err) {
          return res.send(err);
        }

        for (prop in req.body) {
          factura[prop] = req.body[prop];
        }
    // save 
        factura.save(function(err) {
          if (err) {
            return res.send(err);
          }
        res.json({ message: 'factura updated!' });
    });
  });
});

facturarouter.route('/facturas/:id')
    .get(function(req, res) {
      Factura.findOne({ _id: req.params.id}, function(err, factura) {
        if (err) {
          return res.send(err);
        }
        res.json(factura);
  });
});

facturarouter.route('/facturas/:id')
    .delete(function(req, res) {
      Factura.remove({
        _id: req.params.id
      }, function(err, factura) {
       if (err) {
         return res.send(err);
      }
    res.json({ message: 'Satisfactoriamente deleted' });
  });
});


module.exports = facturarouter;