var mysql = require('mysql');


var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql'
});

function arboles() {};

arboles.prototype.display=function(req,done){
    var queryStr = 'SELECT * FROM especies_plantas;';
    this.query(req,queryStr,done);

};

arboles.prototype.displayDetail=function(req,done){
    var queryStr = "select * FROM  especies_plantas WHERE plantas_id ="+req.params.plantas_id;
    this.query(req,queryStr,done);
};


arboles.prototype.query = function (req,queryString,done) {
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


module.exports = new arboles();