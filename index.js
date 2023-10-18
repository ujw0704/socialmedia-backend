import express from "express";
import dotenv from "dotenv";
import register from "./routes/user.js";
import login from "./routes/user.js"
import adminlogin from "./routes/user.js";
import recipe from "./routes/recipe.js";
import cors from "cors";
import { adminregister } from "./controllers/Auth.js";


const PORT = process.env.PORT || 4000;
const app = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000" }));

app.use(register);
app.use(login)
app.use(recipe);
app.use(adminlogin)
app.use(adminregister)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

