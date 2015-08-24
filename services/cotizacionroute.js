var express = require('express');
var cotizacion = require('../dbconnection/cotizacionconection.js');

var cotizacionroute = express.Router();


cotizacionroute.use(function(req,res,next){
    console.log('something is happening');
    next();
});

cotizacionroute.get('/cotizaciondisplay',function(req,res,next){
    cotizacion.display(req,function(result){
        res.send(result);
   });
});


cotizacionroute.put('/agregarcotizacion',function(req,res){
    cotizacion.agregarcotizacion(req,function(result){
        res.send(result);
   });
});

cotizacionroute.put('/estadocotizacion/:cotizacion_id',function(req,res){
    cotizacion.estadocotizacion(req,function(result){
        res.send(result);
   });
});


module.exports = cotizacionroute;