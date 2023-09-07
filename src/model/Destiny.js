import mongoose, { mongo } from "mongoose";

const destinySchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String},
        description: {type: String}
    }
)

const destinations = mongoose.model("destinations", destinySchema);
export default destinations;