var express = require('express');
var clientes = require('../dbconnection/clienteconection.js');

var clienteroute = express.Router();


clienteroute.use(function(req,res,next){
    console.log('something is happening');
    next();
});

clienteroute.get('/display',function(req,res,next){
    clientes.display(req,function(result){
        res.send(result);
   });
});


clienteroute.put('/agregarcliente',function(req,res){
    clientes.agregarcliente(req,function(result){
        res.send(result);
   });
});


module.exports = clienteroute;