
var records = [
    { id: 1, username: '1', password: '1', name: 'Andres', role: 'admin', emails: 'sarmiento@amatea.org' },
    { id: 2, username: 'contabilidad@amatea.org', password: 'dendros1320', name: 'Francia', role: 'admin', emails: 'contabilidad@amatea.org' },
    { id: 3, username: 'beatriz@amatea.org', password: 'beatriz1320', name: 'Beatriz', role: 'user', emails: 'beatriz@amatea.org' },
    { id: 4, username: 'giancarlo@amatea.org', password: 'giancarlo1320', name: 'Giancarlo', role: 'ambiental', emails: 'giancarlo@amatea.org' },
    { id: 5, username: 'amatea', password: 'dendros1320', name: 'Contabilidad', role: 'admin', emails: '' },
    { id: 6, username: '3', password: '3', name: 'ambiental', role: 'user', emails: 'ambiental' },
    { id: 7, username: '2', password: '2', name: 'ambiental', role: 'ambiental', emails: 'ambiental' },
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