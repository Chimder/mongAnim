import express from "express";
import bodyParser from "body-parser";
import * as MangaCrt from "../Controllers/Manga-controller.js";
import multer from "multer";
const upload = multer();

export const router = express.Router();
const jsonParser = bodyParser.json();

const urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get("/manka", MangaCrt.getAllManga);

router.get("/manka/:id", MangaCrt.getMangaById);

router.get("/mankaFilter",urlencodedParser, MangaCrt.getMangaAll);

// router.post("/manka", jsonParser, MangaCrt.changeManga);

// router.delete("/manka/:id", MangaCrt.deleteManga);
