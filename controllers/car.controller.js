// const logger = require('../logger/logger');
const Car = require('../models/car.model');

exports.findAll = async (req, res) => {
  console.log("Find all cars");

  try {
    const result = await Car.find();
    res.status(200).json({ status: true, data: result });
    console.log("Succes in reading all cars");
    // logger.info("Log info success in reading all cars");
    // logger.log("Logger success in reading all cars");
  } catch (err) {
    res.status(400).json({ status: false, data: err })
    console.log("Problem in reading all cars");
    // logger.err("Problem in reading all cars");
  }
}


exports.findOne = async (req, res) => {
  const brand = req.params.brand
  console.log("Find car with brand name", brand);
  try {
    const results = await Car.find({ brand: brand });
    res.status(200).json({ status: true, data: results });
    console.log("Success in reading brand");
    // logger.info("Success in reading brand");
    // logger.log("Success in reading brand");
  } catch (err) {
    res.status(400).json({ status: false, data: err });
    console.log("Problem in reading brand", brand);
    // logger.err("Problem in reading brand");
  }
}

exports.create = async (req, res) => {
  const newCar = new Car({
    brand: req.body.brand,
    model: req.body.model,
    year: req.body.year,
    seat: req.body.seat,
    cc: req.body.cc,
    transmission: req.body.transmission,
    price: req.body.price,
  })
  console.log("Insert car with brand name : ", req.body.brand);
  try {
    const result = await newCar.save();
    res.status(200).json({ status: true, data: result });
    console.log('Success in inserting car: ', req.body.brand);
    // logger.info("Success in inserting car");
    // logger.log("Success in inserting car");
  } catch (err) {
    res.status(400).json({ status: false, data: err });
    console.log("Problem in inserting car", req.bod.brand);
    // logger.err("Problem in inserting car");
  }
}

exports.update = async (req, res) => {
  const brand = req.body.brand;
  console.log("Update car: ", req.body.brand);

  const updateCar = {
    model: req.body.model,
    year: req.body.year,
    seat: req.body.seat,
    cc: req.body.cc,
    transmission: req.body.transmission,
    price: req.body.price,
    booked: req.body.booked
  }
  try {
    const result = await Car.findOneAndUpdate({ brand: brand }, updateCar, { new: true });
    res.status(200).json({ status: true, data: result });
    console.log("Success in updating brand: ", brand);
    // logger.info("Success in update brand");
    // logger.log("Success in update brand");
  } catch (err) {
    res.status(400).json({ status: false, data: err });
    console.log("Problem in update brand: ", req.body.brand);
    // logger.err("Problem in update brand");
  }
}

exports.delete = async (req, res) => {
  const brand = req.body.brand;
  console.log("Delete Car: ", brand);
  try {
    const result = await Car.findOneAndRemove({ brand: brand });
    res.status(200).json({ status: true, data: result });
    console.log("Success in deleting car: ", brand)
    // logger.info("Success in deleting car");
    // logger.log("Success in deleting car");
  } catch (err) {
    res.status(400).json({ status: false, data: err });
    console.log("Problem in deleting car: ", brand);
    // logger.err("Problem in deleting car");
  }
}

