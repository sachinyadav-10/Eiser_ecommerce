// routes/orderRoutes.js
const express = require('express');
const { createOrder } = require('../controllers/ordercontroller');

const router = express.Router();

router.post('/order', createOrder);

module.exports = router;
