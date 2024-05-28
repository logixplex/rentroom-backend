const express = require('express');
const {sendOTPController,verifyOTPController} = require('./sendEmail.controller');

const router = express.Router();

router.post("/send-otp" , sendOTPController) ;

router.post("/verify-otp" , verifyOTPController) ;
module.exports = router;