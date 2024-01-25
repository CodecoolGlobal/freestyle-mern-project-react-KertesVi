import mongoose from "mongoose";
const { Schema, model } = mongoose;

const catSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sex: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    picture: String,
    breed: {
        type: String,
        required: true
    },
    dollars: {
        type: Number,
        default: 0
    }
})
export default model('cat',catSchema);