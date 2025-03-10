import express, { Request, Response } from "express";
import upload from "../middlewares/upload";

const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  (req: Request, res: Response): void => {
    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    res.json({
      filename: req.file.filename,
      path: `/uploads/${req.file.filename}`,
    });
  }
);

export default router;
