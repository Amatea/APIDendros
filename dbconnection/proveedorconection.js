var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');




autoIncrement.initialize();

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