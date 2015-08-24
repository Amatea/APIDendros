var express = require('express');
var facturas = require('../dbconnection/facturasconection.js');

var facturaroute = express.Router();


facturaroute.use(function(req,res,next){
    console.log('something is happening');
    next();
});

facturaroute.get('/facturasdisplay',function(req,res,next){
    facturas.facturasdisplay(req,function(result){
        res.send(result);
   });
});

facturaroute.get('/facturaDetail/:factura_id',function(req,res){
    facturas.displayDetail(req,function(result){
        res.send(result);
   });
});

facturaroute.put('/agregarfactura',function(req,res){
    facturas.agregarfactura(req,function(result){
        res.send(result);
   });
});

facturaroute.put('/estadofactura/:factura_id',function(req,res){
    facturas.estadofactura(req,function(result){
        res.send(result);
   });
});

module.exports = facturaroute;