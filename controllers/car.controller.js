const Car = require('../models/car.model');
const User = require('../models/user.model');


exports.findAll = async (req, res) => {
  console.log("Find all cars");

  try {
    const result = await Car.find();
    res.status(200).json({ status: true, data: result });
    console.log("Succes in reading all products");
    // logger.info("Log info success in reading all products");
    // logger.log("Logger success in reading all products");
  } catch (err) {
    res.status(400).json({ status: false, data: err })
    console.log("Problem in reading all products");
    // logger.err("Problem in reading all products");
  }
}

exports.find = async (req, res) => {
  console.log("Find one car");
  const brand = req.param.brand;
  try {
    const result = await Car.find({ brand: brand })
    res.status(200).json({ status: true, data: result });
  } catch (err) {
    res.status(400).json({ status: false, data: err });
  }
}

exports.create = async (req, res) => {
  console.log("create");
  const newCar = new Car({
    brand: req.body.brand,
    model: req.body.model,
    year: req.body.year,
    seat: req.body.seat,
    cc: req.body.cc,
    transmission: req.body.transmission
  })
  try {
    const result = await newCar.save();
    res.status(200).json({ status: true, data: result })
  } catch (err) {
    res.status(400).json({ status: false, data: err })
  }
}

exports.update = async (req, res) => {
  console.log("update");
  const username = req.params.username;

  const updateCar = {
    brand: req.body.brand,
    model: req.body.model,
    year: req.body.year,
    seat: req.body.seat,
    cc: req.body.cc,
    transmission: req.body.transmission
  }
  try {
    const result = await Car.findOneAndUpdate({ username: username }, updateCar, { new: true });
    res.status(200).json({ status: true, data: result })
  } catch (err) {
    res.status(400).json({ status: false, data: err })
  }
}

exports.delete = async (req, res) => {
  console.log("delete");
  const username = req.params.username;
  try {
    const result = await Car.findOneAndRemove({ username: username });
    res.status(200).json({ status: true, data: result })
  } catch (err) {
    res.status(400).json({ status: false, data: err })
  }
}

// module.exports = { findAll, findOne };