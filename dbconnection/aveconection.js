var mysql = require('mysql');

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var TareaSchema = new Schema({
  titulo: String,
  responsable: String,
  estado: String,
  prioridad: String,
  fecha1: Date,
  fecha2: Date,
  done: { type: String, default: false }
  
});

module.exports = mongoose.model('Tarea', TareaSchema);

aves.prototype.agregarave=function(req,done){
        console.log(req.body);
        var ave = this.addQuotes(req.body.aves_id);
        var nombreC = this.addQuotes(req.body.nombre_cientifico);
        var nombreI = this.addQuotes(req.body.nombre_ingles);
        var nombreCo = this.addQuotes(req.body.nombre_comun);
        var familia = this.addQuotes(req.body.familia);
        var rango = this.addQuotes(req.body.rango_altura);
        var habitat = this.addQuotes(req.body.habitat);
        var descripcion = this.addQuotes(req.body.descripcion_ave);
        var actividad = this.addQuotes(req.body.actividad_ave);
        var estado = this.addQuotes(req.body.estado_conservacion);
        var coordenada = this.addQuotes(req.body.coordenada);
        var canto = this.addQuotes(req.body.canto);
        var fotoM = this.addQuotes(req.body.foto_macho);
        var fotoH = this.addQuotes(req.body.foto_hembra);
        var foto1 = this.addQuotes(req.body.foto1);
        var foto2 = this.addQuotes(req.body.foto2);
        var fotografo = this.addQuotes(req.body.fotografo);
        var fecha = this.addQuotes(req.body.fecha);
        var queryStr = "INSERT INTO aves (`aves_id`, `nombre_cientifico`, `nombre_ingles`, `nombre_comun`, `familia`, `rango_altura`, `habitat`, `descripcion_ave`, `actividad_ave`, `estado_conservacion`, `coordenada`, `canto`, `foto_macho`, `foto_hembra`, `foto1`, `foto2`, `fotografo`, `fecha`) VALUES ("+ave+", "+nombreC+", "+nombreI+", "+nombreCo+", "+familia+", "+rango+", "+habitat+", "+descripcion+", "+actividad+", "+estado+", "+coordenada+", "+canto+", "+fotoM+", "+fotoH+", "+foto1+", "+foto2+", "+fotografo+", "+fecha+");";
        console.log(queryStr);
        this.query(req,queryStr,done);

};


aves.prototype.query = function (req,queryString,done) {
    pool.getConnection(function(err, connection) {
        // Use the connection
        if (err) {
            done({"msg": "DB connection error"});
        }
        else{
            connection.query('use dendros');
            connection.query( queryString, function(err, rows) {
                // And done with the connection.
                console.log(err);
                if (err) {
                    done({"msg": "DB error. Please check DB log."});
                }
                else{
                    console.log('The solution is: ', rows);
                    done(rows);
                }
                connection.release();
            });
        }

    });
};

aves.prototype.addQuotes = function(string) {
    return "'" + string + "'";
};

module.exports = new aves();