import mongoose from "mongoose";
import express from "express";
import cat from "./model/cat.js";
// import DBString from "./DBString.js";
import User from "./model/Users.js";

const PORT = 4000;
const app = express();
app.use(express.json());

try {
  await mongoose.connect(
    "mongodb+srv://kerteszviki:TafT34ZToXZAUKjw@cluster0.rmusfpm.mongodb.net/MERNProject"
  )
  console.log("MongoDB connected")
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
} catch (error) {
  console.error(error);
}

// mongoose.connect(DBString);

app.post("/api/signup", (req, res) => {
  const { username, email, password, phone, address, fullname } = req.body;

  if (!username || !email || !password || !phone || !address || !fullname) {
    return res.status(400).json({ success: false, message: "Invalid input" });
  }

  User.findOne({ email: email })
    .then((existingUser) => {
      if (existingUser) {
        return res
          .status(400)
          .json({ success: false, message: "User already exists" });
      }
      return User.findOne({ username: username });
    })
    .then((existingUser) => {
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User already exists with this username",
        });
      }

      const newUser = new User({
        username,
        email,
        password,
        fullname,
        address,
        phone,
        createdAt: Date.now(),
      });

      return newUser.save();
    })
    .then((savedUser) => {
      res.json({ success: true, user: savedUser });
    })
    .catch((error) => {
      console.error("Error creating user:", error);
      res.status(500).json({ success: false, message: "Server error" });
    });
});

app.get("/api/cats", async (req, res) => {
  try {
    const cats = await cat.find({});
    console.log(cats);
    res.json(cats);
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
});

app.get("/api/cats/:id", (req, res) => {
  const { id } = req.params;
  cat
    .findById({ _id: id })
    .then((cat) => res.json(cat))
    .catch((err) => console.log(err));
});

app.post("/api/cats", (req, res) => {
  console.log(req.body);
  const newCat = new cat({
    name: req.body.name,
    sex: req.body.sex,
    age: req.body.age,
    location: req.body.location,
    picture: req.body.picture,
    breed: req.body.breed,
    dollars: req.body.dollars,
  });
  newCat
    .save()
    .then((cat) => res.json(cat))
    .catch((err) => console.log(err));
});

app.delete("/api/cats/:id", (req, res) => {
  const { id } = req.params;
  cat
    .findOneAndDelete({ _id: id })
    .then((cat) => res.json(cat))
    .catch((err) => console.log(err));
});

app.patch("/api/cats/:id", (req, res) => {
  const { id } = req.params;
  cat
    .findOneAndUpdate(
      { _id: id },
      {
        name: req.body.name,
        sex: req.body.sex,
        age: req.body.age,
        location: req.body.location,
        picture: req.body.picture,
        breed: req.body.breed,
        dollars: req.body.dollars,
      }
    )
    .then((cat) => res.json(cat))
    .catch((err) => console.log(err));
});

// app.listen(3000, () => console.log('Server started on http://localhost:3000/'))
