const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({

    houseName:{
        type : String,
        required:[true , "House Name is required."]
    },
    city:{
        type : String,
        required:[true , "city is required."]
    },
    pincode:{
        type : Number,
        required:[true , "House Address is required."]
    },
    locality:{
        type : String,
        required:[true , "Locality is required."]
    },
    Description:{
        type : String,
        required:[true , "Description is required."]
    },
    price:{
        type : Number,
        required:[true , "Price is required."]
    },
    room:{
        type : Number,
        required:[true , "room is required."]
    },
    kitchen:{
        type : Number,
        required:[true , "kitchen is required."]
    },
    bathroom:{
        type : Number,
        required:[true , "bathroom is required."]
    },
    balcony:{
        type : String,
        required:[true , "balcony is required."]
    },
    adults:{
        type : Number,
       
    },
    children:{
        type : Number,
        
    },
    createdBy:{
        type:mongoose.Schema.ObjectId,
        ref: 'User',
        required:[true]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    images:[
        {
            url: String, 
            description: String 
        }
    ]
})


const Rooms = mongoose.model('Rooms' , RoomSchema);

module.exports = Rooms