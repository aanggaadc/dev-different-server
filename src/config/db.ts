import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: "image_upload",
    });
    console.log("MongoDB connected to local instance");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default dbConnect;
