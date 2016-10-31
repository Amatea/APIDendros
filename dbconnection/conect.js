var mongoose=require('mongoose');
var config = require('../config.js')
mongoose.createConnection(config.db.conn);

module.exports = exports = mongoose;