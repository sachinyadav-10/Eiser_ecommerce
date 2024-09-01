// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  district: { type: String },
  zipCode: { type: String },
  country: { type: String, required: true },
  products: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, required: true },
  termsAccepted: { type: Boolean, required: true },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
