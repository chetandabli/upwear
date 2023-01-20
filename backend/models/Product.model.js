const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    category: String,
    title: String,
    subtitle: String,
    discounted_price: Number,
    strike_price: Number,
    discount: String,
    images: String,
    size: Array,
    rating: Number,
    rating_count: String
});

const Productmodel = mongoose.model("products", productSchema);

module.exports = {
    Productmodel
}

