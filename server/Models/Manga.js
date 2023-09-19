import mongoose from"mongoose";

const Schema = mongoose.Schema;

const mangaSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  img: String,
  imgHeader: String,
  author: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  genres: [String],
});

export const Manka = mongoose.model("Manka", mangaSchema);
// module.exports = Manka;
