import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Not required here cause already loaded in index.js

const URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("MongoDB connected successfully!");
    } catch (err) {
        console.error("Connection failed:", err.message);
        // Exit the process on connection failure
        process.exit(1);
    }
};

export default connectDB;