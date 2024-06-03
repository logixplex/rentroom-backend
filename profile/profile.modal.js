const mongoose = require('mongoose');

const Profile = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    profileImg:{
        type:String
    }
})