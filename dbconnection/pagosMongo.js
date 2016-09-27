var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var PagoSchema = new Schema({
  pagoId: Number,
  proveedor: String,
  servicio: String,
  valor: String,
  proyecto: String,
  estado: { type: String, default: 'Pendiente' },
  fecha: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Pago', PagoSchema);