const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

const cors = require('cors');

const user = require('./')
const hotel = require('/')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
  .then(
    () => { console.log("Connection with the database established") },
    err => { console.log("Failed to connect to MongoDB", err) }
  );

app.use(cors({ origin: '*' }))

// app.use('/', express.static('files'));

app.use('/api/users', user);
app.use('/api/hotels', product);

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument.options))



module.exports = app;

app.listen(port, () => {
  console.log('App is listening on port', port)
})