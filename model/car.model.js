const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

let carSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: String
  },
  seat: {
    type: Number
  },
  cc: {
    type: String
  },
  transmission: {
    type: String
  },
  price: {
    type: Number
  },
  booked: {
    type: Boolean
  }
}, {
  collection: 'products',
  timestamps: true
});

module.exports = mongoose.model('Product', productsSchema);