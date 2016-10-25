'use strict';

exports.render = function(req, res) {
	// Usar el objeto 'response' para renderizar la view 'index' con un 'title' y propiedades 'userFullName'
	res.render('index', {
		title: 'Dendros',
		user: JSON.stringify(req.user)
	});
};