import { Router } from "express";
import {isAuthenticatedUser} from "../middleware/auth";
import {isAdmin} from "../middleware/checkPermission";
import {logOut} from "../controller/authenicateController";
import admin from "./adminRoutes";
import ngo from "./ngoRoutes";
import rest from "./restRoutes";
import user from "./userRoutes";
import auth from "./authRoutes"
const router = Router();
router.use("/", auth);
router.use("/admin",isAuthenticatedUser,isAdmin,admin);
router.use("/ngo" ,isAuthenticatedUser, ngo);
router.use("/user", isAuthenticatedUser, user);
router.use("/rest", isAuthenticatedUser, rest);
router.route("/logout").get(isAuthenticatedUser,logOut);

export default router;