var express         = require('express');
var path            = require('path');
var bodyParser      = require('body-parser');
var morgan    		= require('morgan');
var cookieParser 	= require('cookie-parser');
var session   		= require('express-session');
var methodOverride 	= require('method-override');
var passport 		= require('passport');
var passportlocal   = require('./config/passport');    
var favicon 		= require('serve-favicon');
var mongoose        = require('mongoose');
var flash           = require('connect-flash');
var config          = require('./config');
const MongoStore = require('connect-mongo')(session);
const dotenv        = require('dotenv');
const chalk         = require('chalk');


dotenv.load({ path: '.env.eco' });

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URILO);
mongoose.connection.on('error', () => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

var multer = require('multer');
var ext = require('file-extension');
var aws = require ('aws-sdk');
var multerS3 = require('multer-s3');

var passportlocal = passportlocal();

var s3 = new aws.S3({
    accessKeyId: config.aws.accessKey,
    secretAccessKey: config.aws.secretKey
})

var storage = multerS3({
    s3: s3,
    bucket: 'amateapp',
    acl: 'public-read',
    metadata: function(req, file, cb) {
        cb(null, { fieldName: file.fieldName })
    },
    key: function (req, file, cd) {
        cb(null, +Date.now() + '.' + ext(file.originalname))
    }
})


var geoService = require('./services/georoute');
var tareaService = require('./services/tarearoute');
var eventoService = require('./services/eventoroute');
var jornadaService = require('./services/jornadaroute');
var inventarioService = require('./services/inventarioroute');
var arbolService = require('./services/arbolroute');
var cotizacionService = require('./services/cotizacionroute');
var facturaService = require('./services/facturaroute');
var pagoService = require('./services/pagoroute');
var proveedorService = require('./services/proveedorroute');
var clienteService = require('./services/clienteroute');
var formularioService = require('./services/formularioroute');
var aveService = require('./services/averoute');
var pagomongoService = require('./services/pagorouteMongo');
var mailService = require('./services/mailroute');


var app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));

app.use(cookieParser());
app.use(bodyParser.json() );   
app.use(bodyParser.urlencoded({ 
	extended: true
}));
app.use(methodOverride());                  
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({
    url: process.env.MONGODB_URILO,
    autoReconnect: true
  })
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));



require('./services/indexRoutes')(app);


app.use('/services/jornadaroute', jornadaService);
app.use('/services/inventarioroute', inventarioService);
app.use('/services/arbolroute', arbolService);
app.use('/services/cotizacionroute', cotizacionService);
app.use('/api', facturaService);
app.use('/services/pagoroute', pagoService);
app.use('/api', proveedorService);
app.use('/api', clienteService);
app.use('/services/formularioroute', formularioService);
app.use('/api', aveService);
app.use('/api', geoService);
app.use('/api', tareaService);
app.use('/api', eventoService);
app.use('/api', pagomongoService);
app.use('/api', mailService);

app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.blue('✓'), app.get('port'), app.get('env')); 
  console.log('  Press CTRL-C to stop\n');
});