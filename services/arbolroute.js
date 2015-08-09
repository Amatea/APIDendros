var express = require('express');
var arboles = require('../dbconnection/arbolconnection.js');

var arbolroute = express.Router();


arbolroute.use(function(req,res,next){
    console.log('something is happening');
    next();
});

arbolroute.post('/arbolesdisplay',function(req,res,next){
    arboles.display(req,function(result){
        res.send(result);
   });
});

arbolroute.get('/displayDetail/:plantas_id',function(req,res){
    arboles.displayDetail(req,function(result){
        res.send(result);
   });
});


module.exports = arbolroute;