var express = require('express');
var pagos = require('../dbconnection/pagosconection.js');

var pagoroute = express.Router();


pagoroute.use(function(req,res,next){
    console.log('something is happening');
    next();
});

pagoroute.get('/pagosdisplay',function(req,res,next){
    pagos.display(req,function(result){
        res.send(result);
   });
});

pagoroute.get('/pagoDetail/:pago_id',function(req,res){
    pagos.displayDetail(req,function(result){
        res.send(result);
   });
});

pagoroute.post('/agregarpago',function(req,res){
    pagos.agregarpago(req,function(result){
        res.send(result);
   });
});

pagoroute.put('/estadopago/:pago_id',function(req,res){
    pagos.estadopago(req,function(result){
        res.send(result);
   });
});

module.exports = pagoroute;