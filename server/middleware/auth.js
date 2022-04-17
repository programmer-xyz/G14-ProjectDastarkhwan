import { handleAsyncErr } from "./handleAsyncErr";
import jwt from 'jsonwebtoken';
import HandErr from "../utils/err";
// const User = require("../models/userModel");
import config from "../config/config";

export const isAuthenticatedUser = handleAsyncErr(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new HandErr("Please Login to access this resource", 401));
  }
  console.log(config.JWT_SECRET);
  const decodedData = jwt.verify(token, config.JWT_SECRET);

  //req.user = await User.findById(decodedData.id);

  next();
});

