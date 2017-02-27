var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');


const connection = mongoose.createConnection(process.env.MONGODB_URILO);

autoIncrement.initialize(connection);

var ProveedorSchema = new Schema({
    
  proveedorId: { type: Number},
  razon_social: String,
  NIT: String,
  direccion: String,
  telefono: String,
  cuenta_bancaria: String,
  tipo_cuenta: String,
  banco: String,
  fecha: { type: Date, default: Date.now }

});
ProveedorSchema.plugin(autoIncrement.plugin, { model: 'Proveedor', field: 'proveedorId' });
module.exports = mongoose.model('Proveedor', ProveedorSchema);