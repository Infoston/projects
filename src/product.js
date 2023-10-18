const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  sku: String,
  category: String,
  summary: String,
  stock: Number,
  price: Number,
  description: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
