import { Router } from "express";
import {createAdmin, approvePost, rejectPost, viewApplications,startApp,logOut} from "../controller/authenicateController"
const router = Router();

router.route("/create").post(createAdmin);
router.route("/approve").post(approvePost);
router.route("/reject").post(rejectPost);
router.route("/viewApplications").get(viewApplications);
router.route("/").get(startApp);
export default router;




/* jdsfsdfsdf */
