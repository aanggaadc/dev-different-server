import express, { Request, Response } from "express";
import { Image } from "@/models";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving images", error });
  }
});

// @ts-expect-error - Temporarily suppressing TypeScript error
router.get("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const image = await Image.findById(id);

    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.json(image);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving image", error });
  }
});

export default router;
