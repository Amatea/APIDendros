var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost:27017/GeoDB");
 
autoIncrement.initialize(connection);

var PagoSchema = new Schema({
  pagoId: Number,
  proveedor: String,
  servicio: String,
  valor: String,
  proyecto: String,
  estado: { type: String, default: 'Pendiente' },
  fecha: { type: Date, default: Date.now }

});

PagoSchema.plugin(autoIncrement.plugin, { model: 'Pago', field: 'pagoId' });
module.exports = mongoose.model('Pago', PagoSchema);