const enviornment = process.env.NODE_ENV || 'development';
const mongoConfig = require('./mongoConfig');
const config = mongoConfig[enviornment];
const mongo = require('mongodb');
const monk = require('monk');
const mongoConnection = monk(process.env.MONGODB_URI);


module.exports = mongoConnection;
