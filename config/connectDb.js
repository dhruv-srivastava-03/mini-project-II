const mongoose = require("mongoose");

async function dbConnect(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Expense_App")
        console.log("database connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect;


// import mongoose from "mongoose";

// export const connectDB = async (req, res) => {
//     const db = process.env.MONGO_URL;

//     const {connection} = await mongoose.connect(db, { useNewUrlParser: true });

//     console.log(`MongoDB Connected to ${connection.host}`);

// }