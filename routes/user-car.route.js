const express = require('express');
const router = express.Router();

const userCarController = require('../controllers/user-car.controller');

router.get('/', userCarController.findAll);
// router.get('/stats1', userCarController.stats1)
router.get('/:username', userCarController.findOne);
router.post('/', userCarController.addCar);
router.patch('/:username', userCarController.updateCar);
router.delete('/:username/cars/:_id', userCarController.deleteCar);


module.exports = router; 
