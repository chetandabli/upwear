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
    required: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email address",
    ],
  },
  password: {
    type: String,
    required: true,
    match: [
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      "Password must contain at least one digit, one lowercase letter, one uppercase letter, and must be at least 8 characters long",
    ],
  },
});

// Creating a model using the schema
const RegistrationModel = mongoose.model("user", registrationSchema);

// Exporting the model
module.exports = { RegistrationModel };
