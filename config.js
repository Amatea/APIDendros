'use strict'

var config = {
  sessionSecret: 'dendros',
  aws: {
    accessKey: process.env.AWS_ACCESS_KEY,
    secretKey: process.env.AWS_SECRET_KEY
  },
  db: {
    name: 'GeoDB',
    host: '104.131.122.114',
    port: 27017,
    pwd: 'cibsolar1609',
    user: 'geoUser'
  }
}

module.exports = config;