import { handleAsyncErr } from "./handleAsyncErr";
import jwt from 'jsonwebtoken';
import HandErr from "../utils/err";
// const User = require("../models/userModel");
import config from "../config/config";
import restaurant from "../models/restuarauntSchema.mjs";
import ngo from "../models/ngoSchema.mjs";
import Admin from "../models/adminSchema.mjs";
import User from "../models/userSchema.mjs";

export const isAuthenticatedUser = handleAsyncErr(async (req, res, next) => {
  const role = req.role;

  const { token } = req.cookies;

  if (!token) {
    return next(new HandErr("Please Login to access this resource", 401));
  }
 
  const decodedData = jwt.verify(token, config.JWT_SECRET);
  
  if(role == "user"){
    req.user = await User.findById(decodedData.id);

  }
  else if(role == "rest"){
    req.user = await restaurant.findById(decodedData.id);
  }
  else if(role == "ngo"){
    req.user = await ngo.findById(decodedData.id);
  }
  else if(role == "admin"){
    req.user = await Admin.findById(decodedData.id);
  }

 // next();
});

