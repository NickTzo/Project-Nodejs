const User = require('../models/user.model');
// const logger = require('../logger/logger');

exports.findAll = async (req, res) => {
  console.log("Find all user's cars")

  try {
    const results = await User.find({}, { username: 1, cars: 1 });
    res.status(200).json({ status: true, data: results });
    console.log("Success in reading all user's cars");
    // logger.info("Log info success in reading all user's cars");
    // logger.log("Logger success in reading all user's cars");
  } catch (err) {
    res.status(400).json({ status: false, data: err });
    // logger.error("Problem in reading all user's cars")
    console.log("Problem in reading user's cars");
  }
}

exports.findOne = async (req, res) => {
  const username = req.params.username
  console.log("Find user with username ", username);

  try {
    const result = await User.findOne({ username: username }, { username: 1, cars: 1 });
    res.status(200).json({ status: true, data: result });
    console.log("Success in reading user's cars");
    // logger.info("Log info success in reading user's cars");
    // logger.log("Logger success in reading user's cars");
  } catch (err) {
    res.status(400).json({ status: false, data: err });
    // logger.error("Problem in reading user's cars")
    console.log("Problem in finding user's cars", username);
  }
}

exports.addCar = async (req, res) => {

  const username = req.body.username;
  const cars = req.body.cars;

  console.log("Insert car to username ", username);

  try {
    const result = await User.updateOne(
      { username: username },
      {
        $push: {
          cars: cars
        }
      }
    );
    res.status(200).json({ status: true, data: result });
    // logger.info("Log info success in adding car");
    // logger.log("Logger success in adding car");
    console.log("Success in saving car");
  } catch (err) {
    res.status(400).json({ status: false, data: err });
    // logger.error("Problem in adding car")
    console.log("Problem in saving car", username);
  }
}

exports.updateCar = async (req, res) => {

  const username = req.params.username;
  const car_id = req.params._id
  const car_brand = req.body.brand;
  const car_model = req.body.model;
  const car_year = req.body.year;
  const car_seat = req.body.seat;
  const car_cc = req.body.cc;
  const car_transmission = req.body.transmission;
  const car_price = req.body.price;
  const car_photoURL = req.body.photoURL
  const car_booked = req.body.booked;

  console.log("Update car for username", username);

  try {
    const result = await User.updateOne(
      { username: username, "cars._id": car_id },
      {
        $set: {
          "cars.$.brand": car_brand,
          "cars.$.model": car_model,
          "cars.$.year": car_year,
          "cars.$.seat": car_seat,
          "cars.$.cc": car_cc,
          "cars.$.transmission": car_transmission,
          "cars.$.price": car_price,
          "cars.$.booked": car_booked,
          "cars.$.photoURL": car_photoURL
        }
      }
    );
    res.status(200).json({ status: true, data: result });
    // logger.info("Log info success in updating car for user");
    // logger.log("Logger success in updating car for user");
    console.log("Success in updating car for user");
  } catch (err) {
    res.status(400).json({ status: false, data: err });
    logger.error("Problem in updating car for user")
    // console.log("Problem in updating car for user", username);
  }
}

exports.deleteCar = async (req, res) => {

  const username = req.params.username;
  const car_id = req.params._id;

  try {
    const result = await User.updateOne(
      { username: username },
      {
        $pull: {
          cars: { _id: car_id }
        }
      }
    );
    res.status(200).json({ status: true, data: result });
    logger.info("Log info success in deleting car from user");
    // logger.log("Logger success in deleting car from user");
    // console.log("Success in deleting car from user");
  } catch (err) {
    res.status(400).json({ status: false, data: err });
    logger.error("Problem in deleting car from user")
    // console.log("Problem in deleting car from user", username);
  }

}

// exports.stats1 = async (req, res) => {
//   console.log("For all users sum by product and count");

//   try {
//     const result = await User.aggregate(
//       [
//         {
//           $unwind: "$products"
//         },
//         {
//           $project: {
//             id: 1,
//             username: 1,
//             products: 1
//           }
//         },
//         {
//           $group: {
//             _id: {
//               username: "$username",
//               product: "$products.product"
//             },
//             totalAmmount: {
//               $sum: {
//                 $multiply: ["$products.cost", "$products.quantity"]
//               }
//             },
//             count: { $sum: 1 }
//           }
//         }
//       ]
//     )
//     res.status(200).json({ status: true, data: result });
//     // logger.info("Log info success in reading the products from all users");
//     // logger.log("Logger success in reading the products from all users");
//     console.log("Success in stats1");
//   } catch (err) {
//     res.status(400).json({ status: false, data: err });
//     // logger.error("Problem in reading the products from all users")
//     console.log("Problem in stats1");
//   }
// }