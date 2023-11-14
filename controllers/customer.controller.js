const Customer = require('../models/customer.model');


exports.findAll = async (req, res) => {
  console.log("find customers")
  try {
    const result = await Customer.find();
    res.status(200).json({ status: true, data: result });
  } catch (err) {
    res.status(400).json({ status: false, data: err });
  }
}

exports.findOne = async (req, res) => {
  console.log("find one");
  const email = req.params.email;
  try {
    const result = await Customer.find({ email: email })
    res.status(200).json({ status: true, data: result });
  } catch (err) {
    res.status(400).json({ status: false, data: err });
  }
}

exports.create = async (req, res) => {
  const newCustomer = new Customer({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone
  })
  console.log("Insert user with customer: ", req.body.email);
  try {
    const result = await newCustomer.save();
    res.status(200).json({ status: true, data: result });
    console.log("Success in inserting user with customer: ", req.body.email);
    // logger.info("Log info success in inserting user");
    // logger.log("Logger success in inserting user");
  } catch (err) {
    res.status(400).json({ status: false, data: err });
    console.log("Problem in inserting user with customer: ", req.body.email);
    // logger.error("Problem in inserting user")
  }
}

exports.update = async (req, res) => {
  const email = req.body.email;
  console.log("Update user with email ", email);
  const updateCustomer = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone
  }
  try {
    const result = await Customer.findOneAndUpdate({ email: email }, updateCustomer, { new: true })
    res.status(200).json({ status: true, data: result });
    console.log("Success in updating user with email ", email);
    // logger.info("Log info success in updating user");
    // logger.log("Logger success in updating user");
  } catch (err) {
    res.status(400).json({ status: false, data: err });
    console.log("Problem in update user with email: ", req.body.email);
    // logger.error("Problem in updating user")
  }
}
exports.delete = async (req, res) => {
  const email = req.params.email;
  console.log("Delete User with email: ", email);

  try {
    const result = await Customer.findOneAndRemove({ email: email })
    res.status(200).json({ status: true, data: result });
    console.log("Success in deleting user with email ", email);
    // logger.info("Log info success in deleting user");
    // logger.log("Logger success in deleting user");
  } catch (err) {
    res.status(400).json({ status: false, data: err });
    console.log("Problem in delete user with email: ", email);
    // logger.error("Problem in deleting user")
  }
}