const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer.controller');

router.get('/', customerController.findAll);
router.get('/:name', customerController.findOne);
router.post('/', customerController.create);
router.patch('/:name', customerController.update);
router.delete('/:name', customerController.delete);


module.exports = router;