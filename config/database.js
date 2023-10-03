import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { MONGO_URI } = process.env;

export const connection = mongoose.connect(MONGO_URI)

  
