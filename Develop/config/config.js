const Sequelize = require('sequelize');
require('dotenv').config();

const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: '127.0.0.1',
  dialect: 'mysql',
};

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

module.exports = sequelize;