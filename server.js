const express = require('express');
const app = express();
const signupRoutes = require("./user/user.route");
const sendOtpRoutes = require("./email/sendOTP.route")
const roomRoutes = require("./addRoom/rooms.route")
 
const connectDB = require('./db/connection');
require('dotenv').config();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Welcome");
});

// Use signup routes
app.use("/api", signupRoutes);

// send otp

app.use("/" , sendOtpRoutes)

// Start the server
app.use("/" , roomRoutes)
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
