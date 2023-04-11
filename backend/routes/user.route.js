const userRoute = require("express").Router();
const { Registerationmodel } = require("../models/User.model");
const { hashing } = require("../middlewares/hashing")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// User registration endpoint
userRoute.post("/register", hashing, async (req, res) => {
  let { name, email, password } = req.body;
  try {
    const newUser = new Registerationmodel({ name, email, password });
    await newUser.save();
    res.status(200).json({ message: "Resgistration done" })
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Resgistration not complated" })
  }
});

// User login endpoint
userRoute.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    const userData = await Registerationmodel.findOne({email});
    if(userData.length != 0){
      let is_correct = await bcrypt.compare(password, userData.password);
      let userID=userData._id
      if(is_correct){
        const token = jwt.sign({userID:userID}, process.env.secretKey , { expiresIn: "1h" });
        res.status(200).json({ message: "Login done", token: token, name: userData.name, email: userData.email});
      }else{
        res.status(404).json({ message: "incorrect credantial" })
      }
    }else{
      res.status(404).json({ message: "account not exist" })
    }
    
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Something went wrong!" })
  }
});

module.exports = { userRoute };
