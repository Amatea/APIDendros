'use strict'

var config = {
  sessionSecret: 'dendros',
  aws: {
    accessKey: process.env.AWS_ACCESS_KEY,
    secretKey: process.env.AWS_SECRET_KEY
  },
  db: {
    conn: 'mongodb://geoUser:cibsolar1609@104.131.122.114:27017/GeoDB',
    connAmateapp: 'mongodb://geoUser:cibsolar1609@159.203.113.208:27017/mean',
    connAmateaweb: 'mongodb://geoUser:cibsolar1609@45.55.198.161:27017/amateaDB'
  }
}

module.exports = config;