import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/db";
import uploadRoutes from "./routes/upload";
import retrieveRoutes from "./routes/retrieve";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

dbConnect();

app.use(express.json());
app.use("/upload", uploadRoutes);
app.use("/retrieve", retrieveRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
