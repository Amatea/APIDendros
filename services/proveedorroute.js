var express = require('express');
var Proveedor = require('../dbconnection/proveedorconection.js');

var proveedorrouter = express.Router();

proveedorrouter.use(function(req,res,next){
    console.log('something is happening');
    next();
});

proveedorrouter.route('/proveedores')
  .get(function(req, res) {
    Proveedor.find(function(err, proveedor) {
      if (err) {
        return res.send(err);
      }
        res.json(proveedor);
    });
});

proveedorrouter.route('/proveedores')
  .post(function(req, res) {
  var proveedor = new Proveedor(req.body);

  proveedor.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'proveedor Added' });
  });
});

proveedorrouter.route('/proveedores')
  .get(function(req, res) {
    Proveedor.find(function(err, proveedor) {
      if (err) {
        return res.send(err);
      }
      res.json(proveedor);
    });
  })

  .post(function(req, res) {
    var proveedor = new Proveedor(req.body);

    proveedor.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'proveedor Added' });
    });
  });

proveedorrouter.route('/proveedores/:id')
  .put(function(req,res){
     Proveedor.findOne({ _id: req.params.id }, function(err, proveedor) {
        if (err) {
          return res.send(err);
        }

        for (prop in req.body) {
          proveedor[prop] = req.body[prop];
        }
    // save the movie
        proveedor.save(function(err) {
          if (err) {
            return res.send(err);
          }
        res.json({ message: 'proveedor updated!' });
    });
  });
});

proveedorrouter.route('/proveedores/:id')
    .get(function(req, res) {
      Proveedor.findOne({ _id: req.params.id}, function(err, proveedor) {
        if (err) {
          return res.send(err);
        }
        res.json(proveedor);
  });
});

proveedorrouter.route('/proveedores/:id')
    .delete(function(req, res) {
      Proveedor.remove({
        _id: req.params.id
      }, function(err, proveedor) {
       if (err) {
         return res.send(err);
      }
    res.json({ message: 'Satisfactoriamente deleted' });
  });
});


module.exports = proveedorrouter;