const express = require("express");
const bodyParser = require("body-parser");

const {
  getAllManga,
  getMangaById,
  getMangaAll,
  changeManga,
  deleteManga,
} = require("../Controllers/Manga-controller");

const router = express.Router();
const jsonParser = bodyParser.json();

router.get("/mangaList", getAllManga);

router.get("/mangaList/:id", getMangaById);

router.get("/mangaList/all/", jsonParser, getMangaAll);

router.post("/mangaList", jsonParser, changeManga);

router.delete("/anim/:id", deleteManga);

module.exports = router;
