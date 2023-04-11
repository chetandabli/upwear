const mongoose = require("mongoose");

// Define the admin schema
const adminSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 25,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
});

// Create the Admin model
const Adminmodel = mongoose.model("admin", adminSchema);

// Export the model
module.exports = { Adminmodel };
