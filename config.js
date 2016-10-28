'use strict'

var config = {
  sessionSecret: 'dendros',
  aws: {
    accessKey: process.env.AWS_ACCESS_KEY,
    secretKey: process.env.AWS_SECRET_KEY
  },
  db: {
    conn: 'mongodb://geoUser:cibsolar1609@104.131.122.114:27017/GeoDB'
  }
}

module.exports = config;