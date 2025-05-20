import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

// import constructor function to create object based on schema
import Mentor from "./models/mentorModel.js";
import User from "./models/userModel.js";
import Story from "./models/storyModel.js";
import mongoose from "mongoose";

import mentorRoutes from "./routes/mentorRoutes.js";

dotenv.config(); // load the environment variables

// Connect to MongoDB (should we await it or not?)
await connectDB(); // guess we'll need to await this so that the promise gets resolved first and then further operations are carried out

const port = process.env.PORT || 3000; // Adding a fallback if PORT doesn't load from dotenv
const app = express();

// using middleware to parse incoming JSON data 
app.use(express.json());


// Route Mounting
app.use("/mentors", mentorRoutes);


// Routes below (will later shift to routers and controllers)

app.get("/", (req, res) => {
    res.send("PathBuddy Backend is running");
});

app.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({message: "User created successfully", user});
    } catch (err) {
        console.error("Error:", err.message);
        res.status(500).json({error: err.message});
    }
});

app.post("/stories", async (req, res) => {
    try {
        // console.log(req.body);
        const { userId, title, content } = req.body;
        
        // Basic validation
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({error: "Invalid userId format"});
        }

        if (!title || !content) {
            return res.status(400).json({error: "Title and content are required"});
        }

        const story = new Story({
            userId: userId,
            title: title,
            content: content
        });

        // const story = new Story(req.body);

        // Save the story
        await story.save();

        res.status(201).json({ message: "Story created successfully!", story});

    } catch (err) {
        console.error("Error creating story:", err.message);
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));