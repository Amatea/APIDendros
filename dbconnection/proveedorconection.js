var mysql = require('mysql');

var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql'
});



function proveedores() {
}

proveedores.prototype.display=function(req,done){
    var queryStr = 'SELECT * FROM proveedores';
    this.query(req,queryStr,done);

};

proveedores.prototype.proveedorDetail=function(req,done){
    var queryStr = "SELECT * FROM proveedores WHERE proveedor_id ="+req.params.proveedor_id;
    this.query(req,queryStr,done);

};


proveedores.prototype.agregarproveedor=function(req,done){
        console.log(req.body);
        var proveedor = this.addQuotes(req.body.proveedor_id);
        var razonsocial = this.addQuotes(req.body.razon_social);
        var NIT = this.addQuotes(req.body.NIT);
        var direccion = this.addQuotes(req.body.direccion);
        var telefono = this.addQuotes(req.body.telefono);
        var representante_legal = this.addQuotes(req.body.representante_legal);
        var cedula_representante = this.addQuotes(req.body.cedula_representante);
        var cuenta_bancaria = this.addQuotes(req.body.cuenta_bancaria);
        var tipocuenta = this.addQuotes(req.body.tipo_cuenta);
        var banco = this.addQuotes(req.body.banco);
        var fecha = this.addQuotes(req.body.fecha_creacion);
        var queryStr = "INSERT INTO proveedores (`proveedor_id`, `razon_social`, `NIT`, `direccion`, `telefono`,  `representante_legal`, `cedula_representante`, `cuenta_bancaria`, `tipo_cuenta`,  `banco`, `fecha_creacion`) VALUES ("+proveedor+", "+razonsocial+", "+NIT+", "+direccion+", "+telefono+", "+representante_legal+", "+cedula_representante+", "+cuenta_bancaria+", "+tipocuenta+", "+banco+",  "+fecha+");";
        console.log(queryStr);
        this.query(req,queryStr,done);

};



proveedores.prototype.query = function (req,queryString,done) {
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

proveedores.prototype.addQuotes = function(string) {
    return "'" + string + "'";
};

module.exports = new proveedores();