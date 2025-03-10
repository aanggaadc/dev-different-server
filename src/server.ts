import fs from "fs";
import path from "path";
import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/db";
import uploadRoutes from "@/routes/upload";
import retrieveRoutes from "@/routes/retrieve";

const uploadDir = path.join(__dirname, "../uploads");

dotenv.config();

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const app = express();
const PORT = process.env.PORT || 5000;

dbConnect();

app.use(express.json());
app.use("/upload", uploadRoutes);
app.use("/retrieve", retrieveRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
