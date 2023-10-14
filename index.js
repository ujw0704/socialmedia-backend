import express from "express";
import dotenv from "dotenv";
// import { connection } from "./config/database.js";
import register from "./routes/user.js";
import login from "./routes/user.js"
import adminlogin  from "./routes/user.js";
import adimregister from "./routes/user.js"

import recipe from "./routes/recipe.js";
import cors from "cors";
import { adminregister } from "./controllers/Auth.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" })); 
app.use(express.json());

app.use( register);
app.use(login)
app.use(recipe);
app.use(adminlogin)
app.use(adminregister)

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  })

