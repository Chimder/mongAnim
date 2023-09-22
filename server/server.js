import express, { json } from "express";
import { connect } from "mongoose";
import { router } from "./Routers/Manga.routers.js";
import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";
// const cors = require("cors");

const URL = process.env.MONGODB_URL;
const PORT = 5000;
const app = express();
// const corsOptions = {
//   origin: "http://localhost:3000/",
//   optionSuccessStatus: 200,
// };
// app.use(cors(corsOptions));

// app.use(cors());
app.use(express.json());
app.use(json());
app.use(
  cors({
    origin: ['http://localhost:3000/', 'https://animga.vercel.app/']
  })
);
app.use(router);
////////////////////////////////////////////////////////////////////////////
connect(URL, { useUnifiedTopology: true })
  .then(() => console.log("Mongoose connected"))
  .then(() =>
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`APP listen port:${PORT}`);
    })
  )
  .catch((err) => console.log(`Mongoose Error: ${err}`));
////////////////////////////////////////////////////////////////////////////
