import express from "express";
import { login } from "../controllers/Auth.js"; 

const register = express.Router();

register.post("/login" ,login);
// register.post("/register");
export default register;
