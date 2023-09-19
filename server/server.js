const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const MangaRouter = require("./Routers/Manga.routers");
require("dotenv").config();

const URL = process.env.MONGODB_URL;
const PORT = 4000;
const app = express();

mongoose
  .connect(URL, { useUnifiedTopology: true })
  .then(() => console.log("Mongoose connected"))
  .catch((err) => console.log(`Mongoose Error: ${err}`));

////////////////////////////////////////////////////////////////////////////
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`APP listen port:${PORT}`);
});
app.use(MangaRouter);
app.use(cors());
app.use(express.json());

//////////////////////////////////////////////////////////////////////////////
