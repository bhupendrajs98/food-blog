const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("MongoDB Connected...");
    } catch (error) {
        console.log("Database connection failed", error);
    }
};

module.exports = connectDb;
