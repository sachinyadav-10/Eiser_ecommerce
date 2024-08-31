const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  orders: {
    type: Number,
    required: true,
  },
}, {
  collection: 'Products_eiser' // Explicitly define the collection name
});

const Product = mongoose.model('Products_eiser', productSchema);

module.exports = Product;
