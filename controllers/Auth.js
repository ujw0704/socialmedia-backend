import express from "express";
import passport from "passport";
import LocalStrategy from "passport-local";
import User from "../Models/User.js";
import crypto from "crypto"

export const login = (req, res, next) => {

  
  passport.authenticate("local", (err, user, info) => {

    if (err) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed",
      });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
     
      return res.status(200).json({
        success: true,
        message: "Authentication successful",
        user, 
      });
    });
  })(req, res, next);
};


export const signup = (req, res) => {
  
  
};
