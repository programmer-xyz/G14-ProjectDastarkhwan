import { Router } from "express";
import {createAdmin, adminLogin, approvePost, rejectPost, viewApplications,startApp,logOut} from "../controller/authenicateController"
import {isAuthenticatedUser} from "../middleware/auth";
const router = Router();

router.route("/create").post(createAdmin);
router.route("/login").post(adminLogin);
router.route("/approve").post(approvePost);
router.route("/reject").post(rejectPost);
router.route("/viewApplications").get( viewApplications);
router.route("/generalLogOut").get(logOut);
router.route("/").get(startApp);
export default router;

/* jdsfsdfsdf */
