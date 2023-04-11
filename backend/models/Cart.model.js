// Importing required packages
const mongoose = require("mongoose");

// Creating schema for cart with validation
const cartSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  productid: {
    type: String,
    required: true,
  },
});

// Creating a model using the schema
const Cartmodel = mongoose.model("cart", cartSchema);

// Exporting the model
module.exports = {
  Cartmodel,
};
