const express = require('express');
const router = express.Router();

const carController = require('../controllers/car.controller');

router.get('/', carController.findAll);
router.get('/:brand', carController.findOne);
router.post('/', carController.create);
router.patch('/:_id', carController.update);
router.delete('/:_id', carController.delete);

module.exports = router;