var express = require('express');
var jornada = require('../dbconnection/jornadaconection.js');

var jornadarouter = express.Router();

jornadarouter.use(function(req,res,next){
    console.log('something is happening');
    next();
});

jornadarouter.post('/display',function(req,res){
    jornada.display(req,function(result){
        console.log(result);
        res.send(result);
   });
});

jornadarouter.get('/jornadaDetail/:jornada_id',function(req,res){
    jornada.jornadaDetail(req,function(result){
        res.send(result);
   });
});

jornadarouter.put('/agregarjornada',function(req,res){
    jornada.agregarjornada(req,function(result){
        res.send(result);
   });
});

module.exports = jornadarouter;