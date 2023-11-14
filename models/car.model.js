const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let carSchema = new Schema({
  brand: {
    type: String,
    required: [true, "Brand is required field"],
    max: 10,
    trim: true
  },
  model: {
    type: String,
    required: [true, "Model is required field"],
    max: 10,
    trim: true
  },
  year: {
    type: Number,
    required: [true, "Model Year is required field"],
    trim: true
  },
  seat: {
    type: Number,
    required: [true, "Seats is required field"],
    max: 10,
    trim: true
  },
  cc: {
    type: Number,
    trim: true
  },
  transmission: {
    type: String,
    max: 10,
    trim: true
  },
  booked: {
    type: Number
  }
}, { collection: 'cars', timestamps: true })

mongoose.exports = mongoose.model('Car', carSchema);