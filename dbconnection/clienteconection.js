var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');


//var connection = mongoose.createConnection(process.env.MONGODB_URILO);
 
//autoIncrement.initialize(connection);

var ClienteSchema = new Schema({
    
  clienteId: Number,
  razonsocial: String,
  nit: String,
  nombre_comun: String,
  tipo: String,
  correo: String,
  telefono: String,
  direccion: String,
  ciudad: String,
  fecha: { type: Date, default: Date.now }

});

//ClienteSchema.plugin(autoIncrement.plugin, { model: 'Cliente', field: 'clienteId' });
module.exports = mongoose.model('Cliente', ClienteSchema);

