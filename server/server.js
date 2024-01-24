import mongoose from "mongoose";
import express from "express";
import User from "./model/User.js";

mongoose.connect(
    "mongodb+srv://mmihicsdora:Mongodb2mmihics0dora@cluster0.d6sdkwz.mongodb.net/"
  );
  

 User.create({
      name: "Próba",
      password: "Wanted",
      email: "dksdsds@cicamail.com",
      createdAt: Date.now(),
      updatedAt: Date.now(),
    })
      .then((book) => {
        console.log(book); 
      })
      .catch((error) => {
        console.error(error); 
      });