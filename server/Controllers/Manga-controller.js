const Manka = require("../Models/Manga.model");

const handleError = (res, error) => {
  res.status(500).json({ error });
};

const getAllManga = (req, res) => {
  Manka.find()
    .then((manga) => {
      res.status(200).json(manga);
    })
    .catch(() => handleError(res, "not find mangaList"));
};

const getMangaById = (req, res) => {
  Manka.findById(req.params.id)
    .then((manga) => {
      res.status(200).json(manga);
    })
    .catch(() => handleError(res, "not findById"));
};

const getMangaAll = (req, res) => {
  Manka.find()
    .all("genres", req.body)
    .then((mangas) => {
      res.status(200).json(mangas);
    })
    .catch(() => handleError(res, "not findAll"));
};

const changeManga = (req, res) => {
  const manga = new Manka(req.body);
  manga
    .save()
    .then((manga) => res.status(201).json(manga))
    .catch(() => handleError(res, "not change manga"));
};

const deleteManga = (req, res) => {
  Manka.findByIdAndDelete(req.params.id)
    .then((manga) => res.status(200).json(manga))
    .catch(() => handleError(res, "not delete manga"));
};

module.exports = {
  getAllManga,
  getMangaById,
  getMangaAll,
  changeManga,
  deleteManga,
};
