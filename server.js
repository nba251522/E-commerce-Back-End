require('dotenv').config();

const express = require('express');
const routes = require('./Develop/routes/api');
const Sequelize = require('sequelize');
const config = require('./Develop/config/config.js');
const sequelize = new Sequelize(config.database, config.username, config.password, config);


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});