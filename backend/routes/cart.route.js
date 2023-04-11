const cartRoute = require("express").Router();
const { Cartmodel } = require("../models/Cart.model");
const { validator } = require("../middlewares/validator");
const { Productmodel } = require("../models/Product.model");

cartRoute.use(validator);

// Route to get all items in the user's cart
cartRoute.get("/", async (req, res) => {
  const pipeline = [
    {
      $match: { userID: req.body.userID },
    },
    {
      $addFields: {
        productIdObjectId: { $toObjectId: "$productid" },
      },
    },
    {
      $lookup: {
        from: "products",
        localField: "productIdObjectId",
        foreignField: "_id",
        as: "productdata",
      },
    },
    {
      $unwind: "$productdata",
    },
    {
      $project: {
        _id: "$_id",
        userID: "$userID",
        productid: "$productid",
        category: "$productdata.category",
        title: "$productdata.title",
        subtitle: "$productdata.subtitle",
        discounted_price: "$productdata.discounted_price",
        strike_price: "$productdata.strike_price",
        discount: "$productdata.discount",
        images: "$productdata.images",
        size: "$productdata.size",
        rating: "$productdata.rating",
        rating_count: "$productdata.rating_count",
      },
    },
    {
      $sort: { createdAt: -1 },
    },
  ];
  try {
    const orderData = await Cartmodel.aggregate(pipeline);
    res.json(orderData);
  } catch (error) {
    console.log(error);
  }
});

// Route to verify cart access
cartRoute.get("/verify", async (req, res) => {
  res.json({message: "verified"})
});

// Route to add item to cart
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

// Route to delete an item from cart
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

// Route to delete all items from cart after an order is placed
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
