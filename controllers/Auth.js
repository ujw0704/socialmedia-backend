import express from "express";
// import passport from "passport";
// import LocalStrategy from "passport-local";
// import User from "../Models/User.js";
// import crypto from "crypto"

/*****************************user login**************************************************/ 

export const login =("/login",(req, res) => {
  console.log(req.body)
 
  res.send("Login successful")
})
/******************************user signup**********************************************/ 
export const signup =("/signup",(req, res) => {
  
  console.log(req.body)

  res.send("sign up sucessful")

});
  /**********************************Admin login********************************************************************/ 
  export const adminlogin = ("/adminlogin",(req,res)=>{
    console.log(req.body)
    res.send("admin is sucessful")
  })
  /*************************************Admin register****************************************************************/ 
  export const  adminregister = ("admnregister", (req,res)=>{
    console.log(req.body)
    res.send('sucess')

  })
