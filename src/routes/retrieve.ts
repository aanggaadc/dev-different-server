import express from "express";
import path from "path";

const router = express.Router();

router.get("/:filename", (req, res) => {
  const filePath = path.join(__dirname, "../../uploads", req.params.filename);
  res.sendFile(filePath);
});

export default router;
