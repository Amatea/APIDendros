var express = require('express');
var proveedores = require('../dbconnection/proveedorconection.js');

var proveedorroute = express.Router();


proveedorroute.use(function(req,res,next){
    console.log('something is happening');
    next();
});

proveedorroute.get('/proveedoresdisplay',function(req,res,next){
    proveedores.display(req,function(result){
        res.send(result);
   });
});


proveedorroute.put('/agregarproveedor',function(req,res){
    proveedores.agregarproveedor(req,function(result){
        res.send(result);
   });
});


module.exports = proveedorroute;