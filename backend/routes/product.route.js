// Import required modules
const productRoute = require("express").Router();
const { Productmodel } = require("../models/Product.model");
const { adminAuth } = require("../middlewares/adminAuth")

// Get all products
productRoute.get('/', async(req, res)=>{
    try {
        const productData = await Productmodel.find()
        res.json(productData)
    } catch (error) {
        console.log(error)
    }
});

// Get a specific product by ID
productRoute.get('/:productid', async(req, res)=>{
    let id = req.params.productid
    try {
        const productData = await Productmodel.find({"_id": id})
        res.json(productData)
    } catch (error) {
        console.log(error)
    }
});

// Protected route - only accessible by admin
productRoute.use(adminAuth);

// Create a new product
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

// Export the productRoute
module.exports = {
    productRoute
}
