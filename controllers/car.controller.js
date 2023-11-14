const Car = require('../models/car.model');


exports.findAll = async (req, res) => {
  console.log("Find all cars");
  try {
    const result = await Car.find();
    res.status(200).json({ status: true, data: result });
  } catch (err) {
    res.status(400).json({ status: false, data: err });
  }
}

exports.find = async (req, res) => {
  const brand = req.param.brand;
  try {
    const result = await Car.find({ brand: brand })
    res.status(200).json({ status: true, data: result });
  } catch (err) {
    res.status(400).json({ status: false, data: err });
  }
}

exports.create = async (req, res) => {
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

}

// module.exports = { findAll, findOne };