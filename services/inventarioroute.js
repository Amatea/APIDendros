var express = require('express');
var jornada = require('../dbconnection/inventarioconection.js');

var router = express.Router();

router.use(function(req,res,next){
    console.log('something is happening');
    next();
});

router.post('/display',function(req,res){
    jornada.display(req,function(result){
        console.log(result);
        res.send(result);
   });
});

router.post('/editUser', function(req, res) {
    jornada.editUser(req, function(result) {
        res.send(result);
    });
});

router.post('/addUser',function(req,res){
    jornada.addUser(req, function(result) {
        res.send(result);
    });
});

router.post('/deleteUser',function(req,res){
    jornada.deleteUser(req, function(result) {
        res.send(result);
    });
});


module.exports = router;