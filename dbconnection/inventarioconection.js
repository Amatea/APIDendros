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