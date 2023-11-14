const User = require('../models/user.model');


exports.findAll = async (req, res) => {
  console.log("find users")
  try {
    const result = await User.find();
    res.status(200).json({ status: true, data: result });
  } catch (err) {
    res.status(400).json({ status: false, data: err });
  }
}

exports.findOne = async (req, res) => {
  console.log("find one");
  const lastname = req.params.lastname;
  try {
    const result = await User.find({ lastname: lastname })
    res.status(200).json({ status: true, data: result });
  } catch (err) {
    res.status(400).json({ status: false, data: err });
  }
}

exports.create = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
    car: req.body.cars
  })
  console.log("Insert user with username: ", req.body.username);
  try {
    const result = await newUser.save();
    res.status(200).json({ status: true, data: result });
    console.log("Success in inserting user with username: ", req.body.username);
    // logger.info("Log info success in inserting user");
    // logger.log("Logger success in inserting user");
  } catch (err) {
    res.status(400).json({ status: false, data: err });
    console.log("Problem in inserting user with username: ", req.body.username);
    // logger.error("Problem in inserting user")
  }
}

exports.update = async (req, res) => {
  const username = req.body.username;
  console.log("Update user with username ", username);
  const updateUser = {
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phone: req.body.phone
  }
  try {
    const result = await User.findOneAndUpdate({ username: username }, updateUser, { new: true })
    res.status(200).json({ status: true, data: result });
    console.log("Success in updating user with username ", username);
    // logger.info("Log info success in updating user");
    // logger.log("Logger success in updating user");
  } catch (err) {
    res.status(400).json({ status: false, data: err });
    console.log("Problem in update user with username: ", req.body.username);
    // logger.error("Problem in updating user")
  }
}
exports.delete = async (req, res) => {
  const username = req.params.username;
  console.log("Delete User with username: ", username);

  try {
    const result = await User.findOneAndRemove({ username: username })
    res.status(200).json({ status: true, data: result });
    console.log("Success in deleting user with username ", username);
    // logger.info("Log info success in deleting user");
    // logger.log("Logger success in deleting user");
  } catch (err) {
    res.status(400).json({ status: false, data: err });
    console.log("Problem in delete user with username: ", username);
    // logger.error("Problem in deleting user")
  }
}