var mysql = require('mysql');

var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql'
});



function clientes() {
}

clientes.prototype.display=function(req,done){
    var queryStr = 'SELECT * FROM clientes ';
    this.query(req,queryStr,done);

};

clientes.prototype.clienteDetail=function(req,done){
    var queryStr = "SELECT * FROM clientes WHERE cliente_id ="+req.params.cliente_id;
    this.query(req,queryStr,done);

};


clientes.prototype.agregarcliente=function(req,done){
        console.log(req.body);
        var cliente = this.addQuotes(req.body.cliente_id);
        var razonsocial = this.addQuotes(req.body.razon_social);
        var nit = this.addQuotes(req.body.nit);
        var tipo = this.addQuotes(req.body.tipo);
        var correo = this.addQuotes(req.body.correo_electronico);
        var telefono = this.addQuotes(req.body.telefono);
        var direccion = this.addQuotes(req.body.direccion);
        var ciudad = this.addQuotes(req.body.ciudad);
        var fecha = this.addQuotes(req.body.fecha);
        var queryStr = "INSERT INTO clientes (`cliente_id`, `razon_social`, `nit`, `tipo`, `correo_electronico`, `telefono`, `direccion`, `ciudad`, `fecha`) VALUES ("+cliente+", "+razonsocial+", "+nit+", "+tipo+", "+correo+", "+telefono+", "+direccion+", "+ciudad+",  "+fecha+");";
        console.log(queryStr);
        this.query(req,queryStr,done);

};



clientes.prototype.query = function (req,queryString,done) {
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

clientes.prototype.addQuotes = function(string) {
    return "'" + string + "'";
};

module.exports = new clientes();