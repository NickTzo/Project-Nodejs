const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
require('dotenv').config();

// const user = require('./routes/user.route');
const car = require('./routes/car.route');
// const customer = require('./routes/customer.route');

mongoose.connect(process.env.MONGODB_URI).then(
  () => { console.log("Connection with database established") },
  err => { console.log("Failed to connect to MongoDB", err) }
);

// app.use('/api/users', user)
app.use('/api/cars', car)
// app.use('/api/customers', customer)

app.listen(port, () => {
  console.log('Listening on port')
})