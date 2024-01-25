import mongoose from "mongoose";
import express from "express";
import User from "./model/User.js";

mongoose
  .connect(
    "mongodb+srv://kerteszviki:TafT34ZToXZAUKjw@cluster0.rmusfpm.mongodb.net/MERNProject"
  )
  .then(console.log("MongoDB connection successful"))
  .catch((error) => console.error(error));

const app = express();
app.use(express.json());

const PORT = 4000;

app.post("/api/signup", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
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
        return res
          .status(400)
          .json({
            success: false,
            message: "User already exists with this username",
          });
      }

      const newUser = new User({
        username,
        email,
        password,
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
