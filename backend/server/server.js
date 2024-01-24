import mongoose from "mongoose";


mongoose.connect(
    `mongodb+srv://IrenMost:MGdb24@cluster0.x9mztr9.mongodb.net/test`
  );
import Adoptedcat from "./model/Adoptedcat.js";

Adoptedcat.create({
    name: "Snowball",
    sex: "male",
    age: 3,
    location: "home",
    picture: "adopted3.png",
    breed: "Aegean",
    dollars: 0,
})
.then(adoptedcat => {
    console.log(adoptedcat);
})
.catch(error =>{
    console.error(error);
})