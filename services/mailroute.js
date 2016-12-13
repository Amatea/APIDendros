var express = require('express');
var moment = require('moment');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

var mailrouter = express.Router();

//nodemailer 2

mailrouter.route('/email2')
  .post(function(req, res) {

    var transporter = nodemailer.createTransport({
       service: 'Gmail',
       auth: {
           user: 'amatea@amatea.org',
           pass: 'cibsolar1609'
       }
    });
    var date = moment().format('MMMM Do YYYY, h:mm:ss a')
    var data = req.body;
    var mailOptions = {
       from: 'Amatea',
       to: data.email,
       subject: 'Se ha realizado un pago',
       html: (
         'Hola ' + data.proveedor + '<br><br>' + 
         'Amatea ha realizado el siguiente pago: <br><br>' + 
         'Servicio Prestado: ' + '<b>' + data.servicio + '</b>' + '<br>' +
         'Valor del Servicio: ' + '<b>'+ '$' + Number(data.valor).toLocaleString() + '</b>' + '<br>' +
         'Actividad: '  + '<b>'+ data.proyecto + '</b>' + '<br><br>' +
         'Fecha de pago: ' + date + '<br><br>' +
         '<h3> Gracias por contribuir a la armonía del Ser con la Naturaleza </h3>'
        ) 
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
        res.send(500, err.message);
    } else {
        console.log("Email sent");
        res.status(200).jsonp(req.body);
    }
    });

 });

 module.exports = mailrouter;