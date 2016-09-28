var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ProveedorSchema = new Schema({
    
  proveedorId: Number,
  razon_social: String,
  NIT: String,
  direccion: String,
  telefono: String,
  cuenta_bancaria: String,
  tipo_cuenta: String,
  banco: String,
  fecha: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Proveedor', ProveedorSchema);