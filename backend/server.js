const express = require("express");
const cors = require('cors');
const { connection } = require("./config/db");
const {userRoute} = require("./routes/user.route")
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.use("/user", userRoute);

let port = process.env.port
app.listen(port, async ()=>{
    try {
        await connection;
        console.log("server is running at port", port);
    } catch (error) {
        console.log("error eccures: ", error);
    }
})