import mongoose from "mongoose";
const { Schema, model } = mongoose;

const catSchema = new Schema({
    name: {
        type: String,
    },
    sex: {
        type: String,
    },
    age: {
        type: Number,
    },
    location: {
        type: String,
    },
    picture: String,
    breed: {
        type: String,
    },
    dollars: {
        type: Number,
        default: 0
    }
})
export default model('cat',catSchema);