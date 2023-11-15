const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;


let carSchema = new Schema({
  brand: {
    type: String
  },
  model: {
    type: String
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
  photoURL: {
    type: String
  },
  booked: {
    type: Boolean
  }
}, {
  _id: false
});


let customerSchema = new Schema({
  name: {
    type: String
  },
  surname: {
    type: String
  },
  email: {
    type: String,
    required: [true, 'Email is required field'],
    max: 20,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email address is not valid"]
  },
  phone: {
    type: String,
    max: 11,
    null: true
  },
  cars: {
    type: [carSchema],
    null: true
  }
}, {
  collection: 'customers',
  timestamps: true
});



userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Customer', customerSchema);