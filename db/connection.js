const mongoose = require('mongoose');

const connectDB = async () => {
    const MONGO_URI = process.env.MONGO_URI
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        if(conn){
            console.log("DB connected")
        }
    }
    catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
}


module.exports = connectDB;