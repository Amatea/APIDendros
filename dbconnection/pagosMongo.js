var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');





var PagoSchema = new Schema({
  pagoId: Number,
  proveedor: String,
  servicio: String,
  valor: String,
  proyecto: String,
  email: String,
  estado: { type: String, default: 'Pendiente' },
  fecha: { type: Date, default: Date.now }

});


module.exports = mongoose.model('Pago', PagoSchema);