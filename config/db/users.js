var config = require('../../config')

var records = [
    { id: 1, username: '1', password: '1', name: 'Andres', role: 'admin', emails: '' },
    { id: 2, username: 'amatea', password: 'dendros1320', name: 'Francia', role: '', emails: '' },
    { id: 3, username: '3', password: '3', name: 'Francia', role: 'admin', emails: '' }
];

exports.findById = function(id, cb) {
  process.nextTick(function() {
    var idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
    for (var i = 0, len = records.length; i < len; i++) {
      var record = records[i];
      if (record.username === username) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
}