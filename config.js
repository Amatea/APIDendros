'use strict'

var config = {
  sessionSecret: 'dendros',
  aws: {
    accessKey: process.env.AWS_ACCESS_KEY,
    secretKey: process.env.AWS_SECRET_KEY
  },
  db: {
    conn: 'mongodb://localhost:27017/GeoDB',
    connAmateapp: 'mongodb://localhost:27017/mean',
    connAmateaweb: 'mongodb://localhost:27017/amateaDB'
  }
}

module.exports = config;

//mongodb://geoUser:cibsolar1609@104.131.122.114:27017/GeoDB