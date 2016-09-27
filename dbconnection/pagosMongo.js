var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var PagoSchema = new Schema({
  pago_id: Number,
  proveedor: String,
  servicio: String,
  nit: String,
  banco: String,
  tipo_cuenta: String,
  numero_cuenta: String,
  valor: String,
  proyecto: String,
  estado: { type: String, default: 'Pendiente' },
  fecha: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Pago', PagoSchema);