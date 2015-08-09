var mysql = require('mysql');

var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql'
});



function pago() {
}

pago.prototype.display=function(req,done){
    var queryStr = 'SELECT * FROM pagos';
    this.query(req,queryStr,done);

};

pago.prototype.jornadaDetail=function(req,done){
    var queryStr = "SELECT * FROM jornada_ecologica WHERE jornada_id ="+req.params.jornada_id;
    this.query(req,queryStr,done);

};


pago.prototype.agregarpago=function(req,done){
        console.log(req.body);
        var proveedor = this.addQuotes(req.body.proveedor_id);
        var servicio = this.addQuotes(req.body.servicio_id);
        var razonsocial = this.addQuotes(req.body.razon_social);
        var nit = this.addQuotes(req.body.nit);
        var banco = this.addQuotes(req.body.banco);
        var tipocuenta = this.addQuotes(req.body.tipo_cuenta);
        var numerocuenta = this.addQuotes(req.body.numero_cuenta);
        var valor = this.addQuotes(req.body.valor);
        var estado = this.addQuotes(req.body.estado);
        var comprobante = this.addQuotes(req.body.comprobante_id);
        var fecha = this.addQuotes(req.body.fecha);
        var queryStr = "INSERT INTO pagos (`proveedor_id`, `servicio_id`, `razon_social`, `nit`, `banco`, `tipo_cuenta`, `numero_cuenta`, `valor`, `estado`, `comprobante_id`, `fecha`) VALUES ("+proveedor+", "+servicio+", "+razonsocial+", "+nit+", "+banco+", "+tipocuenta+", "+numerocuenta+", "+valor+", "+estado+", "+comprobante+", "+fecha+");";
        console.log(queryStr);
        this.query(req,queryStr,done);


};

pago.prototype.estadopago=function(req,done){
    var pago_id=this.addQuotes(req.body.pago_id)
    var estado=this.addQuotes(req.body.estado)
    var queryStr = "UPDATE `pagos` SET estado="+estado+" WHERE pago_id="+req.params.pago_id;
    this.query(req,queryStr,done);

};

pago.prototype.query = function (req,queryString,done) {
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

pago.prototype.addQuotes = function(string) {
    return "'" + string + "'";
};

module.exports = new pago();