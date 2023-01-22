const { Orderhistorymodel } = require("../models/Orderhistory.model");
const orderhistoryRoute = require("express").Router();
const { validator } = require("../middlewares/validator")

orderhistoryRoute.use(validator);

orderhistoryRoute.get("/", async (req, res) => {
    try {
      let data = await Orderhistorymodel.find({userID: req.body.userID});
      res.json(data)
    } catch (error) {
      console.log(error)
    }
  });

  orderhistoryRoute.post("/", async (req, res) => {
    let data = req.body;
    try {
      let item = await Orderhistorymodel.insertMany(data);
      res.status(200).json({message : "order placed"});
    } catch (error) {
      console.log(error)
    }
  });

  module.exports = { orderhistoryRoute };