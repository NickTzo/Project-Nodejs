const express = require('express');
const router = express.Router();

const carController = require('../controllers/car.controller');

router.get('/', carController.findAll);
router.get('/:brand', carController.findOne);
router.post('/', carController.create);
router.patch('/:brand', carController.update);
router.delete('/:brand', carController.delete);

module.exports = router;