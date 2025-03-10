import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  path: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
  size: { type: Number, required: true },
  mimetype: { type: String, required: true },
});

export const Image = mongoose.model("Image", ImageSchema);
