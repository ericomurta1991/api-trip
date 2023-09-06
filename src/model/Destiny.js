import mongoose, { mongo } from "mongoose";

const destinySchema = new mongoose(
    {
        id: {type: String},
        name: {type: String},
        description: {type: String}
    }
)

const destinations = mongoose.model("destinations", destinySchema);
