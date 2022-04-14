import { Router } from "express";
import {createAdmin, adminLogin, approvePost, rejectPost, viewApplications} from "../controller/authenicateController"

const router = Router();

router.route("/create").post(createAdmin);
router.route("/login").post(adminLogin);
router.route("/approve").get(approvePost);
router.route("/reject").get(rejectPost);
router.route("/viewApplications").get( viewApplications);
export default router;

/* jdsfsdfsdf */
