import mongoose from "mongoose";
import Mentor from "../models/mentorModel.js";
import connectDB from "../config/db.js";

await connectDB();

// Sample mentors to insert to collection associtated with Mentor model (i.e. mentors)
const mentorsToInsert = [
    {
      "name": "Dr. Sarah Chen",
      "bio": "Former Google AI researcher with 15 years of experience in machine learning and computer vision. PhD from Stanford University. Passionate about mentoring the next generation of AI scientists.",
      "skills": ["Machine Learning", "Computer Vision", "Python", "TensorFlow", "Research Methods"],
      "availability": true
    },
    {
      "name": "Marcus Johnson",
      "bio": "Senior software architect at Amazon with expertise in distributed systems and cloud infrastructure. Has guided over 50 junior developers throughout his career and maintains an active tech blog.",
      "skills": ["AWS", "System Design", "Microservices", "Java", "DevOps"],
      "availability": false
    },
    {
      "name": "Priya Patel",
      "bio": "Startup founder with three successful exits. Angel investor and business strategist specializing in SaaS and fintech ventures. MBA from Wharton Business School.",
      "skills": ["Entrepreneurship", "Business Strategy", "Product Management", "Fundraising", "Growth Hacking"],
      "availability": true
    },
    {
      "name": "James Rodriguez",
      "bio": "Full-stack developer and open source contributor with a focus on frontend technologies. Currently engineering lead at Netflix. Organizes local coding workshops for underrepresented communities.",
      "skills": ["JavaScript", "React", "Node.js", "UI/UX Design", "Mentorship"],
      "availability": true
    },
    {
      "name": "Dr. Olivia Washington",
      "bio": "Data scientist with background in quantitative finance. Previously worked at Goldman Sachs and JPMorgan. PhD in Statistics from MIT. Specializes in predictive modeling and algorithmic trading.",
      "skills": ["Data Science", "Statistical Analysis", "R", "Python", "Financial Modeling"],
      "availability": false
    },
    {
      "name": "Miguel Sanchez",
      "bio": "Cybersecurity expert and ethical hacker with experience at major tech companies and government agencies. Certified in CISSP and CEH. Frequent speaker at security conferences.",
      "skills": ["Network Security", "Penetration Testing", "Threat Analysis", "Cryptography", "Security Compliance"],
      "availability": true
    },
    {
      "name": "Aisha Kwon",
      "bio": "Mobile app developer specializing in iOS and cross-platform solutions. Former Apple engineer and current CTO of a health tech startup. Has published multiple apps with millions of downloads.",
      "skills": ["Swift", "React Native", "Mobile UI Design", "App Store Optimization", "Agile Development"],
      "availability": true
    },
    {
      "name": "Thomas Wright",
      "bio": "Blockchain developer and cryptocurrency expert. Contributed to Ethereum and several DeFi projects. Advises startups on implementing blockchain solutions and smart contract architecture.",
      "skills": ["Blockchain", "Smart Contracts", "Solidity", "Cryptocurrency", "Decentralized Applications"],
      "availability": false
    },
    {
      "name": "Elena Vasquez",
      "bio": "UX researcher and designer with experience at Facebook and Airbnb. Masters in Human-Computer Interaction from Carnegie Mellon. Specializes in creating accessible and inclusive digital experiences.",
      "skills": ["User Research", "Interaction Design", "Accessibility", "Prototyping", "Design Thinking"],
      "availability": true
    },
    {
      "name": "David Kim",
      "bio": "Game developer and technical artist with credits on several AAA titles. Expert in graphics programming and real-time rendering. Teaches game development courses online and mentors indie developers.",
      "skills": ["Unity", "Unreal Engine", "C++", "3D Graphics", "Game Design"],
      "availability": true
    }
];

// Learning:
/*
    We're calling the insertMany() method on "Mentor model" and passing the "mentorsToInsert" array.Mongoose will then take each object in this array and insert it as a new document into the MongoDB collection associated with the Mentor model 
*/

const seedMentors = async () => {
    try {
        const result = await Mentor.insertMany(mentorsToInsert);
        console.log("Succesfully inserted mentors:", result);

        // disconnect from the db after seeding
        mongoose.connection.close();
    } catch (err) {
        console.error("Error inserting mentors:", err.message);

        if (mongoose.connection) mongoose.connection.close();
    }
}

// Calling the function to execute the insertion
seedMentors();