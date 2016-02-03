var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan    		= require('morgan');
var cookieParser 	= require('cookie-parser');
var session   		= require('express-session');
var methodOverride 	= require('method-override');
var passport 		= require('passport');
var LocalStrategy 	= require('passport-local').Strategy;
var favicon 		= require('serve-favicon');

var myService=require('./services/route');
var jornadaService=require('./services/jornadaroute');
var inventarioService=require('./services/inventarioroute');
var arbolService=require('./services/arbolroute');
var cotizacionService=require('./services/cotizacionroute');
var facturaService=require('./services/facturaroute');
var pagoService=require('./services/pagoroute');
var proveedorService=require('./services/proveedorroute');
var clienteService=require('./services/clienteroute');
var formularioService=require('./services/formularioroute');
var aveService=require('./services/averoute');

var app = express();

app.use(morgan('dev'));

app.use(cookieParser());
app.use(bodyParser.json() );   
app.use(bodyParser.urlencoded({ 
	extended: true
}));
app.use(methodOverride());                  // simulate DELETE and PUT
app.use(session({ 
	resave: true,
    saveUninitialized: true,
    secret: 'Dendros' }));
app.use(passport.initialize()); // Add passport initialization
app.use(passport.session());    // Add passport initialization
app.use(express.static(path.join(__dirname, 'public')));

app.use('/services/route', myService);
app.use('/services/jornadaroute', jornadaService);
app.use('/services/inventarioroute', inventarioService);
app.use('/services/arbolroute', arbolService);
app.use('/services/cotizacionroute', cotizacionService);
app.use('/services/facturaroute', facturaService);
app.use('/services/pagoroute', pagoService);
app.use('/services/proveedorroute', proveedorService);
app.use('/services/clienteroute', clienteService);
app.use('/services/formularioroute', formularioService);
app.use('/services/averoute', aveService);

app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'));

console.log("Server started");