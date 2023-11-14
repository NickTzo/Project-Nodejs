const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// const user = require('./routes/user.route');
const car = require('./routes/car.route');
// const customer = require('./routes/customer.route');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('dotenv').config();
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