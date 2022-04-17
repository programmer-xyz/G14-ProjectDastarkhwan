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
    res.status(201).json({
      success: false,
      message: "user not logged in",
      login:false
      //user: user1,
      //role:role
  
    });
    return;
  
    //return next(new HandErr("Please Login to access this resource", 401));
  }
 
  const decodedData = jwt.verify(token, config.JWT_SECRET);
  
  let user1 = null;
  if(role == "user"){
    user1 = await User.findById(decodedData.id);

  }
  else if(role == "rest"){
   user1 = await restaurant.findById(decodedData.id);
  }
  else if(role == "ngo"){
    user1 = await ngo.findById(decodedData.id);
  }
  else if(role == "admin"){
    user1 = await Admin.findById(decodedData.id);
  }
  
  res.status(200).json({
    success: true,
    message: "user logged in",
    login:true,
    user: user1,
    role:role
  });

 // next();
});

