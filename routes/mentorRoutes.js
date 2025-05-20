// First we need to define the API endpoint that will handle the GET request

import express from "express";
import Mentor from "../models/mentorModel.js";
import User from "../models/userModel.js";
import mongoose from "mongoose";

const router = express.Router();

router.get("/match", async (req, res) => {
    // get userId from query parameters
    const userId = req.query.userId;
    console.log("Received userId:", userId); // For debugging

    // now we use the userId to find the corresponding user in my "User" model and retrieve their interests
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({message: "User not found!"});
        }
        // Fun experiments below
        /****************************/
        /*
        const userName = user.name;
        const userEmail = user.email;
        const userCollege = user.college;

        console.log(`${userName}\n${userEmail}\n${userCollege}`);

        */
        /****************************/

        const userInterests = user.interests;
        console.log("User interests:", userInterests); // For debugging
        // res.status(200).json({message: userInterst});

        const matchedMentors = await Mentor.find({
            skills: {$in: userInterests},
            availability: true
        });

        // console.log("Matched mentors:", matchedMentors);
        matchedMentors.forEach(mentor => {
            console.log(`\nMentor: ${mentor.name}\nBio: ${mentor.bio}\n`);
        });

        res.status(200).json(matchedMentors);

    } catch (err) {
        console.error("Error fetching Mentors:", err);
        return res.status(500).json({error: "Failed fetching mentors"});
    }
});

// console.log(router);

export default router;