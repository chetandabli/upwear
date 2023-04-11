// Importing required packages
const mongoose = require("mongoose");

// Creating schema for products
const productSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: String,
  discounted_price: {
    type: Number,
    required: true,
  },
  strike_price: {
    type: Number,
    required: true,
  },
  discount: String,
  images: {
    type: String,
    required: true,
  },
  size: {
    type: [String],
    required: true,
  },
  rating: Number,
  rating_count: String,
});

// Creating a model using the schema
const Productmodel = mongoose.model("products", productSchema);

// Exporting the model
module.exports = {
  Productmodel,
};
