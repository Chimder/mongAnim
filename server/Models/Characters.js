import mongoose from "mongoose";

const Schema = mongoose.Schema;

const stfSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  zoom: Number,
  main: Number,
  img: String,
  imgActive: String,
  imgNotActive: String,
  describe: String,
  hates: String,
  likes: String,
  height: String,
  weight: String,
  combo: String,
  img1: String,
  img2: String,
  out1: [String],
  out2: [String],
  video: [{ comboName: String, video: String }],
});

export const Characters = mongoose.model("characters", stfSchema);
