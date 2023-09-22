import express from "express";
import { connect } from "mongoose";
import { router } from "./Routers/Manga.routers.js";
import "dotenv/config";
import cors from "cors";

const URL = process.env.MONGODB_URL;
const port = 5555;
const app = express();

connect(URL, { useUnifiedTopology: true })
  .then(() => console.log("Mongoose connected"))
  .catch((err) => console.log(`Mongoose Error: ${err}`));

console.log(port);
console.log(process.env.PORT);

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use(router);

app.listen(process.env.PORT || port, (err) => {
  err
    ? console.log(err)
    : console.log(`APP listen port:${process.env.PORT || port}`);
});
