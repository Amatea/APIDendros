var mysql = require('mysql');

var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql'
});

function facturas() {
};

facturas.prototype.facturasdisplay=function(req,done){
    var queryStr = 'SELECT * FROM facturas';
    this.query(req,queryStr,done);

};


facturas.prototype.agregarfactura=function(req,done){
        console.log(req.body);
        var factura = this.addQuotes(req.body.factura_id);
        var numero = this.addQuotes(req.body.numero_factura);
        var cliente = this.addQuotes(req.body.cliente_id);
        var descripcion = this.addQuotes(req.body.descripcion);
        var valor = this.addQuotes(req.body.valor);
        var fecha = this.addQuotes(req.body.fecha);
        var estado = this.addQuotes(req.body.estado);
        var queryStr = "INSERT INTO facturas (`factura_id`, `numero_factura`, `cliente_id`, `descripcion`,  `valor`, `fecha`, `estado` ) VALUES ("+factura+", "+numero+", "+cliente+", "+descripcion+", "+valor+", "+fecha+", "+estado+");";
        console.log(queryStr);
        this.query(req,queryStr,done);


};

facturas.prototype.estadofactura=function(req,done){
    var factura_id=this.addQuotes(req.body.factura_id)
    var estado=this.addQuotes(req.body.estado)
    var queryStr = "UPDATE `facturas` SET estado="+estado+" WHERE factura_id="+req.params.factura_id;
    this.query(req,queryStr,done);

};

facturas.prototype.query = function (req,queryString,done) {
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

facturas.prototype.addQuotes = function(string) {
    return "'" + string + "'";
};

module.exports = new facturas();
