var express = require('express');
var aves = require('../dbconnection/aveconection.js');

var averoute = express.Router();


averoute.use(function(req,res,next){
    console.log('something is happening');
    next();
});

averoute.post('/avesdisplay',function(req,res,next){
    aves.display(req,function(result){
        res.send(result);
   });
});

averoute.get('/displayDetail/:aves_id',function(req,res){
    aves.displayDetail(req,function(result){
        res.send(result);
   });
});

averoute.put('/agregarave',function(req,res){
    aves.agregarave(req,function(result){
        res.send(result);
   });
});


module.exports = averoute;