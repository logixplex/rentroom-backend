const mongoose = require("mongoose");

const OTPSchema = mongoose.Schema({
    email:{
        type:String,
        required:[true]
    },
    otp:{
        type:Number
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires: 60
    }
})

const OTPs = mongoose.model('OTP' ,OTPSchema );
module.exports = OTPs;