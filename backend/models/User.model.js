const mongoose = require("mongoose");

// Creating schema for user registration
const registrationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

// Creating a model using the schema
const Registerationmodel = mongoose.model("user", registrationSchema);

// Exporting the model
module.exports = { Registerationmodel };
