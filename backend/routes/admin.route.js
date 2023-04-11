const adminRoute = require("express").Router();
const { Adminmodel } = require("../models/Admin.model");
const { hashing } = require("../middlewares/hashing")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// Route for admin registration
adminRoute.post("/register", hashing, async (req, res) => {
  let { name, email, password } = req.body;
  try {
    // Creating new admin
    const newAdmin = new Adminmodel({ name, email, password });
    // Saving admin data to database
    await newAdmin.save();
    res.status(200).json({ message: "Resgistration done" })
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Resgistration not complated" })
  }
});

// Route for admin login
adminRoute.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    // Checking if admin with the given email exists
    const adminData = await Adminmodel.findOne({email});
    if(adminData.length != 0){
      // Comparing given password with stored password
      let is_correct = await bcrypt.compare(password, adminData.password);
      let adminID=adminData._id
      if(is_correct){
        // Creating JWT token for authenticated admin
        const token = jwt.sign({adminID:adminID}, process.env.secretKey , { expiresIn: "30m" });
        res.status(200).json({ message: "Login done", token: token, name: adminData.name});
      }else{
        res.status(404).json({ message: "incorrect credantial" });
      }
    }else{
      res.status(404).json({ message: "account not exist" });
    }
    
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong!" })
  }
});

module.exports = { adminRoute };
