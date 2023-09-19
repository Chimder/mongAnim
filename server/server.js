import express, { json } from "express";
import cors from "cors";
import { connect } from "mongoose";
import { router } from "./Routers/Manga.routers.js";
import "dotenv/config";
import bodyParser from "body-parser";

// const corsOptions = {
//   origin: "http://localhost:3000",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
const URL = process.env.MONGODB_URL;
const PORT = 4000;
const app = express();

connect(URL, { useUnifiedTopology: true })
  .then(() => console.log("Mongoose connected"))
  .catch((err) => console.log(`Mongoose Error: ${err}`));

////////////////////////////////////////////////////////////////////////////
app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`APP listen port:${PORT}`);
});

app.use(json());
app.use(cors());
app.use(router);
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
