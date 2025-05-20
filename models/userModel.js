import mongoose from "mongoose";

// First we create an userSchema
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    college: String,
    year: Number,
    interests: [String] // used in place Array 
}, { timestamps: true });

// Creating a constructor User to make objects based on userSchema
const User = mongoose.model("User", userSchema);
// Mongoose will automatically create (if it doesn't exist)/look for "users" (lowercase of User) collection 

export default User;