var express = require('express');
var formulario = require('../dbconnection/formularioconection.js');

var formularioroute = express.Router();


formularioroute.use(function(req,res,next){
    console.log('something is happening');
    next();
});

formularioroute.get('/display',function(req,res,next){
    formulario.display(req,function(result){
        res.send(result);
   });
});


formularioroute.put('/agregar',function(req,res){
    formulario.agregar(req,function(result){
        res.send(result);
   });
});


module.exports = formularioroute;