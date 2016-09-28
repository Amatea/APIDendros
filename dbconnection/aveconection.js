var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var AveSchema = new Schema({
    
  aveId: Number,
  nombre_cientifico: String,
  nombre_ingles: String,
  nombre_comun: String,
  familia: String,
  rango_altura: String,
  habitat: String,
  descripcion_ave: String,
  estado_conservacion: String,
  coordenada: String,
  canto: String,
  foto_macho: String,
  foto_hembra: String,
  foto1: String,
  foto2: String,
  fotografo: String,
  fecha: { type: Date, default: Date.now }

});

module.exports = mongoose.model('Ave', AveSchema);