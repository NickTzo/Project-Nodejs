const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let carSchema = new Schema({
  brand: {
    type: String,
    trim: true
  },
  model: {
    type: String,
    trim: true
  },
  year: { type: Number },
  date: { type: date, default: Date.now }
}, { _id: false })


let userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required field"],
    max: 50,
    trim: true
  },
  password: {
    type: String,
    required: [true, "Password is required field"],
    max: 50,
    trim: true
  },
  firstname: {
    type: String,
    required: [true, "Firstname is required field"],
    max: 50,
    trim: true
  },
  lastname: {
    type: String,
    required: [true, "Lastname is required field"],
    max: 50,
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required field"],
    max: 50,
    trim: true,
    unique: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Email address is not valid"]
  },
  phone: {
    type: String,
    required: [true, "Phone is required field"],
    min: 8,
    max: 8,
    trim: true,
    lowercase: true
  },
  car: carSchema
}, {
  collection: 'users',
  timestamps: true
})


userSchema.plugin(uniqueValidator);
mongoose.exports = mongoose.model('User', userSchema);