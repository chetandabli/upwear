// Import required modules
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const { connection } = require("./config/db");
const {userRoute} = require("./routes/user.route");
const {adminRoute} = require("./routes/admin.route");
const { productRoute } = require("./routes/product.route");
const { cartRoute } = require("./routes/cart.route");
const { orderhistoryRoute } = require("./routes/orderhistory.route")

// Create a new express app
const app = express();

// Load environment variables from .env file
require('dotenv').config();

// Set up middleware
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.json())
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Set up routes
app.use("/user", userRoute);
app.use("/admin", adminRoute);
app.use("/products", productRoute);
app.use("/cart", cartRoute);
app.use("/order", orderhistoryRoute);

// Start server
let port = process.env.port
app.listen(port, async ()=>{
    try {
        // Connect to database
        await connection;
        console.log("Database connection successful");
    } catch (error) {
        console.log("Error connecting to database: ", error);
    }
    // Server is listening on specified port
    console.log(`Server running at http://localhost:${port}`);
})
