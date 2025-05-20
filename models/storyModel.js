import mongoose, { Schema } from "mongoose";

// Reference (Relationships) between Mongoose Models:
/*
    In mongoose, we define relationships between different "collections" by using the "objectId" type for one field 
    and then using "ref" options to tell mongoose which "model" that objectId refers to.
*/

const storySchema = new Schema({
    userId: { 
        type: Schema.Types.ObjectId, 
        ref: "User" // Name of model that ObjectId refers to
    },
    title: String,
    content: String
}, { timestamps: true });

// Create a model based on schema
const Story = mongoose.model("Story", storySchema);

export default Story;