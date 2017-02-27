var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
mongoose.Promise = global.Promise;

var connection = mongoose.createConnection(process.env.MONGODB_URILO);
 
autoIncrement.initialize(connection);

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
  actividad_ave: String,
  coordenada: String,
  canto: String,
  thumbUrl: String,
  foto_macho: String,
  foto_hembra: String,
  foto1: String,
  foto2: String,
  fotografo: String,
  fecha: { type: Date, default: Date.now }

});

AveSchema.plugin(autoIncrement.plugin, { model: 'Ave', field: 'aveId' });
module.exports = mongoose.model('Ave', AveSchema);