var express = require('express');
var GEO = require('../dbconnection/geoconection.js');

var georouter = express.Router();

georouter.use(function(req,res,next){
    console.log('something is happening');
    next();
});

georouter.route('/GEO')
	.get(function(req, res){
		GEO.find(function(err, geo){
			if (err) {
				return res.send(err);
			}

			res.json(geo);
		});
	});

georouter.route('/GEO')
	.post(function(req, res) {
  		var geo = new GEO(req.body);

  geo.save(function(err) {
    if (err) {
      return res.send(err);
    }
    res.send({ message: 'GeoJson Added' });
  });
});


module.exports = georouter;