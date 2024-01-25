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

// app.get("/api/homepage/:username", (req, res) => {
//   const username = req.params.username
//   User.findOne({username: username})
//   .then((user) => {
//     console.log(user)
//     res.json(user)
//   })
//   .catch((error) => console.error(error));
// });




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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
