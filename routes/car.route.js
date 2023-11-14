const express = require('express');
const router = express.Router();

const carController = require('../controllers/car.controller');

router.get('/', carController.findAll);
router.get('/:brand', carController.find);
router.post('/', carController.create);
router.patch('/:username', carController.update);
router.delete('/:username', carController.delete);

module.exports = router;