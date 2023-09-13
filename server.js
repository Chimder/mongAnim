import { error } from "console";
import express from "express";

const app = express();

const PORT = 5555;

app.get("/", (req, res) => {
  res.send("hui");
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("conectikus to server");
});
