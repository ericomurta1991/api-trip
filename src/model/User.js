import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, require: true},
        surname: {type: String, require: true},
        email: {type: String, require: true},
        birth_date: {type: String, require: true},
        street_adress: {type: String, require: true},
        number_adress: {type: String, require: true},
        city: {type: String, require:true},
        state: {type: String, require: true}
    },
    {
        versionKey: false
    }
)

const users = mongoose.model("users", userSchema);

export default users;