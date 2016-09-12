var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var facturaSchema = new Schema({
  titulo: String,
  responsable: String,
  estado: String,
  prioridad: String,
  fecha1: Date,
  fecha2: Date,
  done: { type: String, default: false }
  
});

module.exports = mongoose.model('Factura', facturaSchema);