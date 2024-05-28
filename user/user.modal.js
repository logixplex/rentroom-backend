const mongoose = require('mongoose');

const UserSchema  = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required."]
    },
    email:{
        type:String,
        required:[true,"Email is required."]
    },
    phone:{
        type:Number,
        required:[true,"Phone Number is required."]
    },
    userType:{
        type:Number,
        required:[true,"User Type is required."]
    },
    password:{
        type:Number,
        required:[true,"Password is required."]
    },
    
})

const Users = mongoose.model('Users' , UserSchema)
module.exports = Users