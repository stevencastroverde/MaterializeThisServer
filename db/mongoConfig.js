const dotenv = require('dotenv');
dotenv.config();

module.exports = {

  development: process.env.DEVELOPMENT_DATABASE,
  production : process.env.DATABASE_URL
};
