import { Router } from "express";
import {createAdmin, adminLogin, approvePost, rejectPost, viewApplications,startApp,logOut} from "../controller/authenicateController"
import {isAuthenticatedUser} from "../middleware/auth";
const router = Router();

router.route("/create").post(isAuthenticatedUser,createAdmin);
router.route("/login").post(isAuthenticatedUser,adminLogin);
router.route("/approve").get(isAuthenticatedUser,approvePost);
router.route("/reject").get(isAuthenticatedUser,rejectPost);
router.route("/viewApplications").get(isAuthenticatedUser, viewApplications);
router.route("/generalLogOut").get( isAuthenticatedUser,logOut);
router.route("/").get(startApp);
export default router;

/* jdsfsdfsdf */
