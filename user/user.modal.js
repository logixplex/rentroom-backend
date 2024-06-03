const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."]
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    phone: {
        type: Number,
        required: [true, "Phone Number is required."],
        minlength:10,
    },
    userType: {
        type: Number,
        required: [true, "User Type is required."]
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: 8,
    },
    isverifyEmail:{
        type:Boolean,
        default:false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now  // Use default with Date.now
    }
}, {
    timestamps: true
})

const Users = mongoose.model('Users', UserSchema)
module.exports = Users