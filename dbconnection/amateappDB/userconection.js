var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var config = require('../../config.js')
var conn1 = mongoose.createConnection(config.db.connAmateapp);  

var ArticleSchema = {
  
  p1: Number,
  p2: Number,
  p3: Number,
  p4: Number,
  p5: Number,
  p6: Number,
  p7: Number,
  p8: Number,
  p9: Number,
  p10: Number,
  p11: Number,
  totalTrees: { type: Number, default: '0'},
  sembrados: { type: Number, default: '0'},

  firstName: String,
  lastName: String,
  email: {
    type: String,
    // Validar el formato email 
    match: [/.+\@.+\..+/, "Por favor escribe una dirección de email correcta"]
  },
  username: {
    type: String,
    //Configurar un único index 'username'
    unique: true,
    //Validar existencia valor 'username'
    required: 'Nombre de usuario es obligatorio',
    //Trim el campo 'username'
    trim: true
  },
  
  provider: {
    type: String,
    //Validar existencia valor Provider
  },
  providerId: String,
  providerData: {
    picture: { type: String, default: 'img/account_circle_48px.svg' }
  },
  created: { type: Date, default: Date.now }
};

module.exports = conn1.model('Article', mongoose.Schema(ArticleSchema));
