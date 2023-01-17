const mongoose = require("mongoose");

const registerationSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const Registerationmodel = mongoose.model("user", registerationSchema);

module.exports = { Registerationmodel }