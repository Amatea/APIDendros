var mysql = require('mysql');

var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'cibsolar1609'
});



function formulario() {
}

formulario.prototype.display=function(req,done){
    var queryStr = 'SELECT * FROM formulario';
    this.query(req,queryStr,done);

};


formulario.prototype.agregar=function(req,done){
        console.log(req.body);
        var id = this.addQuotes(req.body.id);
        var nombre = this.addQuotes(req.body.nombre);
        var correo = this.addQuotes(req.body.correo);
        var telefono = this.addQuotes(req.body.telefono);
        var donacion = this.addQuotes(req.body.donacion);
        var acompanante = this.addQuotes(req.body.acompanante);
        var comentario = this.addQuotes(req.body.comentario);
        var queryStr = "INSERT INTO formulario (`id`, `nombre`, `correo`, `telefono`, `donacion`, `acompanante`, `comentario`) VALUES ("+id+", "+nombre+", "+correo+", "+telefono+", "+donacion+", "+acompanante+",  "+comentario+");";
        console.log(queryStr);
        this.query(req,queryStr,done);

};



formulario.prototype.query = function (req,queryString,done) {
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

formulario.prototype.addQuotes = function(string) {
    return "'" + string + "'";
};

module.exports = new formulario();