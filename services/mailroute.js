var express = require('express');

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();

var mailrouter = express.Router();

//nodemailer 2

mailrouter.route('/email2')
  .post(function(req, res) {

    var transporter = nodemailer.createTransport({
       service: 'Gmail',
       auth: {
           user: 'sarmiento@amatea.org',
           pass: 'cibsolar1609'
       }
    });
    var data = req.body;
    var mailOptions = {
       from: data.email,
       to: 'amatea@amatea.org',
       subject: 'Message from ' + data.nombre,
       text: data.empresa
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