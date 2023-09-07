import mongoose from "mongoose";

const reserveSchema = new mongoose.Schema(
    {
        id: {type: String},
        id_user : {type: mongoose.Schema.Types.ObjectId, ref: "users", required: true},
        id_destiny: {type: mongoose.Schema.Types.ObjectId, ref: "destinations", required: true},
        date: {type: Date},
        status: {type: String} 

    }
)

const reservations = mongoose.model("reservations", reserveSchema);
export default reservations;
