var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var EventoSchema = new Schema({
  titulo: String,
  organizacion: String,
  observaciones: String,
  registrado: String,
  fecha: Date
  
});

module.exports = mongoose.model('Evento', EventoSchema);