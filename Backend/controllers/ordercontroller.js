// controllers/orderController.js
const Order = require('../models/Order');

const createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: 'Order placed successfully' });
  } catch (error) {
    console.error('Error placing order:', error.message);
    res.status(500).json({ error: 'Failed to place order' });
  }
};

module.exports = { createOrder };
