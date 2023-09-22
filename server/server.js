import express, { json } from "express";
import { connect } from "mongoose";
import { router } from "./Routers/Manga.routers.js";
import "dotenv/config";
import bodyParser from "body-parser";

const URL = process.env.MONGODB_URL;
const PORT = 5000;
const app = express();

////////////////////////////////////////////////////////////////////////////
connect(URL, { useUnifiedTopology: true })
  .then(() => console.log("Mongoose connected"))
  .then(() =>
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`APP listen port:${PORT}`);
    })
  )
  .catch((err) => console.log(`Mongoose Error: ${err}`));

app.use(express.json());
app.use(json());
app.use(router);
