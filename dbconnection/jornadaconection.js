var mysql = require('mysql');

var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql'
});



function jornada() {
}

jornada.prototype.display=function(req,done){
    var queryStr = 'SELECT * FROM jornada_ecologica;';
    this.query(req,queryStr,done);

};

jornada.prototype.jornadaDetail=function(req,done){
    var queryStr = "SELECT * FROM jornada_ecologica WHERE jornada_id ="+req.params.jornada_id;
    this.query(req,queryStr,done);

};

jornada.prototype.agregarjornada=function(req,done){
        console.log(req.body);
        var jornada_id = this.addQuotes(req.body.jornada_id);
        var cliente = this.addQuotes(req.body.cliente);
        var participantes = this.addQuotes(req.body.numero_participantes);
        var arboles = this.addQuotes(req.body.numero_arboles);
        var interpretes = this.addQuotes(req.body.interpretes);
        var fecha = this.addQuotes(req.body.fecha);
        var queryStr = "INSERT INTO jornada_ecologica (`jornada_id`, `cliente`, `numero_participantes`,  `numero_arboles`, `interpretes`, `fecha` ) VALUES ("+jornada_id+", "+cliente+", "+participantes+", "+arboles+", "+interpretes+", "+fecha+");";
        console.log(queryStr);
        this.query(req,queryStr,done);


};


jornada.prototype.query = function (req,queryString,done) {
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

jornada.prototype.addQuotes = function(string) {
    return "'" + string + "'";
};

module.exports = new jornada();