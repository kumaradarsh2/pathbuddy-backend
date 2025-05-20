import mongoose from "mongoose";

const mentorSchema = mongoose.Schema({
    name: String,
    bio: String,
    skills: [String],
    availability: Boolean 
}, { timestamps: true });

const Mentor = mongoose.model("Mentor", mentorSchema);

export default Mentor;