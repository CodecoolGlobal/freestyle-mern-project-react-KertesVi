import mongoose from "mongoose";
import express from "express";

mongoose.connect(
    `mongodb+srv://IrenMost:MGdb24@cluster0.x9mztr9.mongodb.net/test`
  );
import Adoptedcat from "./model/Adoptedcat.js";

const app = express();
app.use(express.json());
app.get("/api/cats/all", (req, res) => {
    cat.find(
        {}, {
        ObjectId: true,
        name: true,
        sex: true,
        age: true,
        location: true,
        picture: true,
        breed: true,
        dollars: true
    })
        .then(cats => res.json(cats))
        .catch(err => console.log(err));

})

// Adoptedcat.create({
//     name: "Snowball",
//     sex: "male",
//     age: 3,
//     location: "home",
//     picture: "adopted3.png",
//     breed: "Aegean",
//     dollars: 0,
// })
// .then(adoptedcat => {
//     console.log(adoptedcat);
// })
// .catch(error =>{
//     console.error(error);
// })