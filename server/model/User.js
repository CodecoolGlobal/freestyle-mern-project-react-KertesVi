import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  password: String,
  email:String,
  createdAt: Date,
  updatedAt: Date
});

export default model("User", userSchema);
