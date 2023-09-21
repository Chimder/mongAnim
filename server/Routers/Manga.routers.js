import express from "express";
import bodyParser from "body-parser";
import * as MangaCrt from "../Controllers/Manga-controller.js";
import multer from "multer";

// const upload = multer();
export const router = express.Router();
const jsonParser = bodyParser.json();


const urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get("/mankas", MangaCrt.getAllManga);

// router.get("/manka/:id", MangaCrt.getMangaById);

router.get("/manka/:name", MangaCrt.getMangaByName);

router.post("/mankas", jsonParser, MangaCrt.getMangaAll);

router.post("/mankasInput", jsonParser, MangaCrt.getByInput);

// router.post("/manka", jsonParser, MangaCrt.changeManga);
