var express = require('express');
var inventario = require('../dbconnection/inventarioconection.js');

var inventarioroute = express.Router();

inventarioroute.use(function(req,res,next){
    console.log('something is happening');
    next();
});

inventarioroute.get('/display',function(req,res){
    inventario.display(req,function(result){
        console.log(result);
        res.send(result);
   });
});

inventarioroute.put('/agregarinventario',function(req,res){
    inventario.agregarinventario(req, function(result) {
        res.send(result);
    });
});


module.exports = inventarioroute;