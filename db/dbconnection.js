const enviornment = process.env.NODE_ENV || 'development';
const mongoConfig = require('./mongoConfig');
const config = mongoConfig[enviornment];
const mongo = require('mongodb');
const monk = require('monk');
const mongoConnection = monk(config);


module.exports = mongoConnection;
