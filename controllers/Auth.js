import express from "express";
// import passport from "passport";
// import LocalStrategy from "passport-local";
import User from "../Models/User.js";
// import crypto from "crypto"



export const login =("/login",(req, res) => {
  console.log(req.body)
 
  res.send("Login successful")
})

export const signup =("/signup",(req, res) => {
  
  console.log(req.body)

  res.send("sign up sucessful")
});
