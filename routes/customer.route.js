const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer.controller');

router.get('/', customerController.findAll);
router.get('/:email', customerController.findOne);
router.post('/', customerController.create);
router.patch('/:email', customerController.update);
router.delete('/:email', customerController.delete);

module.exports = router;