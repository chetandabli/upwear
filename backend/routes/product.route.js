const productRoute = require("express").Router();
const { Productmodel } = require("../models/Product.model");
const { adminAuth } = require("../middlewares/adminAuth")
const express = require("express");
const jwt = require('jsonwebtoken');

// productRoute.use(express.json());

productRoute.get('/child', async(req, res)=>{
    try {
        const productData = await Productmodel.find()
        res.json(productData)
    } catch (error) {
        console.log(error)
    }
});

productRoute.use(adminAuth);
productRoute.post("/post",async(req, res)=>{
    try {
        const data = await Productmodel.insertMany(req.body);
        res.send("done")
        // const newData = await new Postmodel(req.body)
        // await newData.save();
        // res.json({message: "posted"})
    } catch (error) {
        console.log(error)
    }
})

module.exports = {
    productRoute
}