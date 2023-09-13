// import { error } from "console";
const express = require("express");
// import mongoose from "mongoose";
const { connectToDb, getDb } = require("./db");

// mongoose.connect(
//   "mongodb+srv://Cingisxanchina:v5ErqAZS2BfgnZqf@cluster0.dvhpekh.mongodb.net/?retryWrites=true&w=majority"

// ).then(()=> {
//   console.log('db OK')
// }).catch((err) => console.log('db error',err))

// app.get("/", (req, res) => {
//   res.send("hui");
// });

// app.listen(PORT, (err) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("conectikus to server");
// });

const PORT = 5555;
const app = express();

let db;
connectToDb((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log("Krosavchik");
    });
    db = getDb();
  } else {
    console.log(`db connection error ${err}`);
  }
});

app.get("/animList", (req, res) => {
  const animList = [];

  db.collection("AniList")
    .find()
    .forEach((anim) => animList.push(anim))
    .then(() => {
      res.status(200).json(animList);
    });
});
