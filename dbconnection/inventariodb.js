var Db = require ('mysql-activerecord');
var db = new Db.Adapter({
    server: 'localhost',
    username: 'root',
    password: 'mysql',
    database: 'dendros'
});