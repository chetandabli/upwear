const cartRoute = require("express").Router();
const { Cartmodel } = require("../models/Cart.model");
const jwt = require('jsonwebtoken');
const { validator } = require("../middlewares/validator")

cartRoute.use(validator);

cartRoute.get("/", async (req, res) => {
    try {
      let data = await Cartmodel.find({userID: req.body.userID});
      res.json(data)
    } catch (error) {
      console.log(error)
    }
  });
cartRoute.get("/verify", async (req, res) => {
  res.json({message: "verified"})
});

  cartRoute.post("/", async (req, res) => {
    let data = req.body;
    try {
      let item = new Cartmodel(data);
      await item.save()
      res.status(200).json({message: "Product Added"});
    } catch (error) {
      console.log(error)
    }
  });

  cartRoute.delete("/:id", async (req, res) => {
    let id = req.params.id;
    let data = await Cartmodel.find({userID: req.body.userID, productid: id});
    try {
      await Cartmodel.findByIdAndDelete(data[0]._id);
      res.status(200).json({message: "Product Deleted"});
    } catch (error) {
      console.log(error)
    }
  });
  cartRoute.delete("/", async (req, res) => {
    let userID = req.body.userID;
    try {
      await Cartmodel.deleteMany({userID: userID});
      res.status(200).json({message: "Product Deleted from cart after ordered"});
    } catch (error) {
      console.log(error)
    }
  });

module.exports = { cartRoute };