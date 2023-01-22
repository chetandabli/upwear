const mongoose = require("mongoose");

const orderhistorySchema = mongoose.Schema({
    userID: String,
    productid: String, 
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    rate: {type: Number, default: 0},
    is_delivered: {type: Boolean, default: false}
});

const Orderhistorymodel = mongoose.model("orderhistory", orderhistorySchema);

module.exports = {
    Orderhistorymodel
}