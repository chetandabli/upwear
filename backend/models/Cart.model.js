const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    userID: String,
    productid: String
});

const Cartmodel = mongoose.model("cart", cartSchema);

module.exports = {
    Cartmodel
}