import express from "express"
import dotenv from "dotenv"
import { connection } from "./config/database.js";

const app = express()
dotenv.config();
const PORT = process.env.PORT|| 4000;

app.use(express.json())





connection.then(() =>app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  }) );