var express = require('express');
var Pago = require('../dbconnection/pagosMongo.js');

var pagorouter = express.Router();

pagorouter.use(function(req,res,next){
    console.log('something is happening');
    next();
});

pagorouter.route('/pagos')
  .get(function(req, res) {
    Pago.find(function(err, pago) {
      if (err) {
        return res.send(err);
      }
        res.json(pago);
    });
});

pagorouter.route('/pagos')
  .post(function(req, res) {
  var pago = new Pago(req.body);

  pago.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'pago Added' });
  });
});

pagorouter.route('/pagos')
  .get(function(req, res) {
    Pago.find(function(err, pago) {
      if (err) {
        return res.send(err);
      }
      res.json(pago);
    });
  })

  .post(function(req, res) {
    var pago = new Pago(req.body);

    pago.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'Pago Added' });
    });
  });

pagorouter.route('/pagos/:id')
  .put(function(req,res){
     Pago.findOne({ _id: req.params.id }, function(err, pago) {
        if (err) {
          return res.send(err);
        }

        for (prop in req.body) {
          pago[prop] = req.body[prop];
        }
    // save the movie
        pago.save(function(err) {
          if (err) {
            return res.send(err);
          }
        res.json({ message: 'Pago updated!' });
    });
  });
});

pagorouter.route('/pagos/:id')
    .get(function(req, res) {
      Pago.findOne({ _id: req.params.id}, function(err, pago) {
        if (err) {
          return res.send(err);
        }
        res.json(pago);
  });
});

pagorouter.route('/pagos/:id')
    .delete(function(req, res) {
      Pago.remove({
        _id: req.params.id
      }, function(err, pago) {
       if (err) {
         return res.send(err);
      }
    res.json({ message: 'Satisfactoriamente deleted' });
  });
});


module.exports = pagorouter;