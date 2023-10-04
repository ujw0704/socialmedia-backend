import express from "express";
import { login, signup } from "../controllers/Auth.js"; 
const register = express.Router();

register.post("/login", login);
register.post("/register", signup);
export default register;
