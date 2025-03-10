import express, { Request, Response } from "express";

import { upload } from "@/middlewares";

import { Image } from "@/models";

const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  async (req: Request, res: Response): Promise<void> => {
    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    try {
      const newImage = new Image({
        filename: req.file.filename,
        path: `uploads/${req.file.filename}`,
        size: req.file.size,
        mimetype: req.file.mimetype,
      });

      await newImage.save();
      res.json({ message: "Image uploaded successfully", data: newImage });
    } catch (error) {
      res.status(500).json({ message: "Error saving image metadata", error });
    }
  }
);

export default router;
