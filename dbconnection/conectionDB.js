'use strict';

var	mongoose = require('mongoose');

module.exports = function() {
	
	var db = mongoose.connect('mongodb://localhost:27017/GeoDB');

	return db;
};