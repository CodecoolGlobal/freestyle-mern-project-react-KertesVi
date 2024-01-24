import mongoose from "mongoose";


mongoose.connect(
    `mongodb+srv://IrenMost:MGdb24@cluster0.x9mztr9.mongodb.net/test`
  );
import Adoptedcat from "./model/Adoptedcat.js";

Adoptedcat.create({
    name: "Fluffy",
    sex: "female",
    age: 2,
    location: "home",
    picture: "adopted2.png",
    breed: "Aegean",
    dollars: 0,
})
.then(adoptedcat => {
    console.log(adoptedcat);
})
.catch(error =>{
    console.error(error);
})