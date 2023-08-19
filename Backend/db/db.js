const mongoose = require('mongoose');

require ('dotenv').config();
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log ("Connected to MongoDB Database");
    } catch (error) {
        console.log(`MongoDB Error ${error}`);
    }
}
module.exports = connectDB;