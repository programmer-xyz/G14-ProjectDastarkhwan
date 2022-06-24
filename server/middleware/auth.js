import { handleAsyncErr } from "./handleAsyncErr";
import jwt from 'jsonwebtoken';
import HandErr from "../utils/err";
// const User = require("../models/userModel");
import config from "../config/config";
import restaurant from "../models/restuarauntSchema.mjs";
import ngo from "../models/ngoSchema.mjs";
import Admin from "../models/adminSchema.mjs";
import User from "../models/userSchema.mjs";

export const isAuthenticatedUser  = handleAsyncErr(async (req, res, next) => {
  //const role = req.role;

  const { token } = req.cookies;
  console.log(req.cookies);
  console.log(token)
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "You have to login to access this feature",
      login:false
      //user: user1,
      //role:role
  
    });
  }
  const decodedData = jwt.verify(token, config.JWT_SECRET);
  res.role = decodedData.role;
  console.log(decodedData);
  next();
});

