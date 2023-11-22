require('dotenv').config();

const express = require('express');
const routes = require('./Develop/routes/api');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the API routes
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});