var mysql = require('mysql');

var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql'
});



function cotizaciones() {
}

cotizaciones.prototype.display=function(req,done){
    var queryStr = 'SELECT * FROM cotizaciones';
    this.query(req,queryStr,done);

};


cotizaciones.prototype.agregarcotizacion=function(req,done){
        console.log(req.body);
        var cotizacion = this.addQuotes(req.body.cotizacion_id);
        var numero = this.addQuotes(req.body.numero_cotizacion);
        var cliente = this.addQuotes(req.body.cliente);
        var elaborado = this.addQuotes(req.body.elaborado);
        var fecha = this.addQuotes(req.body.fecha);
        var estado = this.addQuotes(req.body.estado);
        var queryStr = "INSERT INTO cotizaciones (`cotizacion_id`, `numero_cotizacion`, `cliente`, `elaborado`,  `fecha`, `estado` ) VALUES ("+cotizacion+", "+numero+", "+cliente+", "+elaborado+", "+fecha+", "+estado+");";
        console.log(queryStr);
        this.query(req,queryStr,done);


};

cotizaciones.prototype.estadocotizacion=function(req,done){
    var cotizacion_id=this.addQuotes(req.body.cotizacion_id)
    var estado=this.addQuotes(req.body.estado)
    var queryStr = "UPDATE `cotizaciones` SET estado="+estado+" WHERE cotizacion_id="+req.params.cotizacion_id;
    this.query(req,queryStr,done);

};

cotizaciones.prototype.query = function (req,queryString,done) {
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

cotizaciones.prototype.addQuotes = function(string) {
    return "'" + string + "'";
};

module.exports = new cotizaciones();
