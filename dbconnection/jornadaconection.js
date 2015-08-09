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

jornada.prototype.jornadainventario=function(req,done){
    var queryStr = "SELECT * FROM inventario_siembras WHERE jornada_id ="+req.params.jornada_id;
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

module.exports = new jornada();