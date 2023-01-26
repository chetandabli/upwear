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

  orderhistoryRoute.delete("/:id", async(req, res)=>{
    let id=req.params.id
    try {
      await Orderhistorymodel.findByIdAndDelete(id);
      res.json({"message": "deleted"})
    } catch (error) {
      res.send({"error":error.message})
    }
  })
  orderhistoryRoute.patch("/:id", async(req, res)=>{
    let id=req.params.id;
    let rate = req.body.rating;
    try {
      await Orderhistorymodel.findByIdAndUpdate(id, {rate: rate});
      res.json({"message": "updated"})
    } catch (error) {
      res.send({"error":error.message})
    }
  })

  module.exports = { orderhistoryRoute };