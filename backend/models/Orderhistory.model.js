// Importing required packages
const mongoose = require("mongoose");

// Creating schema for order history
const orderhistorySchema = mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  productid: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  rate: {
    type: Number,
    default: 0,
  },
  is_delivered: {
    type: Boolean,
    default: false,
  },
});

// Creating a model using the schema
const Orderhistorymodel = mongoose.model("orderhistory", orderhistorySchema);

// Exporting the model
module.exports = {
  Orderhistorymodel,
};
