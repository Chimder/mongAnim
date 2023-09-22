import express from "express";
import bodyParser from "body-parser";
import * as MangaCrt from "../Controllers/Manga-controller.js";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:3000/",
  optionSuccessStatus: 200,
};
// const upload = multer();
export const router = express.Router();
const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get("/mankas", cors(corsOptions), MangaCrt.getAllManga);

// router.get("/manka/:id", MangaCrt.getMangaById);

router.get("/manka/:name", cors(corsOptions), MangaCrt.getMangaByName);

router.post("/mankas", cors(corsOptions), jsonParser, MangaCrt.getMangaAll);

router.post("/mankasInput", cors(corsOptions), jsonParser, MangaCrt.getByInput);

