'use strict'

var config = {
  sessionSecret: 'dendros',
  aws: {
    accessKey: process.env.AWS_ACCESS_KEY,
    secretKey: process.env.AWS_SECRET_KEY
  },
  
}

module.exports = config;

//mongodb://geoUser:cibsolar1609@104.131.122.114:27017/GeoDB