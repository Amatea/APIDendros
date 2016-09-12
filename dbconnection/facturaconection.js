var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var FacturaSchema = new Schema({
  numero_factura: Number,
  cliente_id: String,
  descripcion: String,
  valor: Number,
  fecha: Date,
  estado: String
  
});

module.exports = mongoose.model('Factura', FacturaSchema);