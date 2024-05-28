const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://ayushsharma81852:ayushsharma81852@cluster0.vqeiigp.mongodb.net/rentroom', {
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