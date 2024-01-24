import mongoose from "mongoose";
import express from "express";
import cat from "./model/cat.js";
import DBString from "./DBString.js";

const app = express();
app.use(express.json());



mongoose.connect(DBString);


app.get("/api/cats", async (req, res) => {
    try {
        const cats = await cat.find(
            {} 
        )
        console.log(cats);
        res.json(cats)
    } catch (error) {
        console.error(error);
        throw new Error (error.message)
    }
        

})

app.get("/api/cats/:id", (req, res) => {
    const { id } = req.params;
    cat.findById({ _id: id })
        .then(cat => res.json(cat))
        .catch(err => console.log(err))

})

app.post("/api/cats", (req, res) => {
    console.log(req.body);
    const newCat = new cat({
        name: req.body.name,
        sex: req.body.sex,
        age: req.body.age,
        location: req.body.location,
        picture: req.body.picture,
        breed: req.body.breed,
        dollars: req.body.dollars
    })
    newCat.save()
        .then(cat => res.json(cat))
        .catch(err => console.log(err));
})

app.delete("/api/cats/:id", (req, res) => {
    const { id } = req.params;
    cat.findOneAndDelete({ _id: id })
        .then(cat => res.json(cat))
        .catch(err => console.log(err));
})

app.patch("/api/cats/:id", (req, res) => {
    const { id } = req.params;
    cat.findOneAndUpdate({ _id: id }, {
        name: req.body.name,
        sex: req.body.sex,
        age: req.body.age,
        location: req.body.location,
        picture: req.body.picture,
        breed: req.body.breed,
        dollars: req.body.dollars
    })
        .then(cat => res.json(cat))
        .catch(err => console.log(err));
})


app.listen(3000, () => console.log('Server started on http://localhost:3000/'))