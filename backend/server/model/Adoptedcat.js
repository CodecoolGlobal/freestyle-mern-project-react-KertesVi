import mongoose from "mongoose";
const {Schema, model} = mongoose;

const adoptedcatSchema = new Schema({
    name: String,
    sex: String,
    age: Number,
    location: String,
    picture: Image,
    breed: String,
    dollars: Number,
    
})

export default model('Adoptedcat', adoptedcatSchema )