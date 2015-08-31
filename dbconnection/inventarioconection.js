var mysql = require('mysql');

var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql'
});



function inventario() {
}

inventario.prototype.display=function(req,done){
    var queryStr = 'SELECT * FROM inventario_siembras;';
    this.query(req,queryStr,done);

};

inventario.prototype.agregarinventario=function(req,done){
        console.log(req.body);
        var plantas = this.addQuotes(req.body.plantas_id);
        var cantidad = this.addQuotes(req.body.cantidad);
        var jornada = this.addQuotes(req.body.jornada_id);
        var fecha = this.addQuotes(req.body.fecha);
        var queryStr = "INSERT INTO inventario_siembras (`plantas_id`, `cantidad`, `jornada_id`, `fecha`) VALUES ("+plantas+", "+cantidad+", "+jornada+", "+fecha+");";
        console.log(queryStr);
        this.query(req,queryStr,done);


};


inventario.prototype.query = function (req,queryString,done) {
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

inventario.prototype.addQuotes = function(string) {
    return "'" + string + "'";
};
module.exports = new inventario();