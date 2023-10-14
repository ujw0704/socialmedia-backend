import express from "express";
import { login ,signup ,adminlogin,adminregister} from "../controllers/Auth.js"; 

const register = express.Router();

register.post("/login" ,login);
register.post("/signup",signup);
/**************************AdminLogin*******************************************/ 
register.post("/adminlogin", adminlogin);

/*******************************Admin Register******************************************/ 
register.post("adminregister",adminregister)
export default register;
