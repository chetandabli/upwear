const { Orderhistorymodel } = require("../models/Orderhistory.model");
const orderhistoryRoute = require("express").Router();
const { validator } = require("../middlewares/validator");
const { Productmodel } = require("../models/Product.model");

orderhistoryRoute.use(validator);

orderhistoryRoute.get("/", async (req, res) => {
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
        createdAt: "$createdAt",
        rate: "$rate",
        is_delivered: "$is_delivered",
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
    const orderData = await Orderhistorymodel.aggregate(pipeline);
    res.json(orderData);
  } catch (error) {
    console.log(error);
  }
});

orderhistoryRoute.post("/", async (req, res) => {
  let data = req.body;
  try {
    let item = await Orderhistorymodel.insertMany(data);
    res.status(200).json({ message: "order placed" });
  } catch (error) {
    console.log(error);
  }
});

orderhistoryRoute.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    await Orderhistorymodel.findByIdAndDelete(id);
    res.json({ message: "deleted" });
  } catch (error) {
    res.send({ error: error.message });
  }
});
orderhistoryRoute.patch("/:id", async (req, res) => {
  let id = req.params.id;
  let rate = req.body.rating;
  try {
    await Orderhistorymodel.findByIdAndUpdate(id, { rate: rate });
    res.json({ message: "updated" });
  } catch (error) {
    res.send({ error: error.message });
  }
});

module.exports = { orderhistoryRoute };
