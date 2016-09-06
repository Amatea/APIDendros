var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var GEOSchema = new Schema({
  lat: Number,
  lng: Number,
  message: String,
  
});

module.exports = mongoose.model('GEO', GEOSchema);