import { Router } from "express";
import {createAdmin, adminLogin, approvePost, rejectPost} from "../controller/authenicateController"

const router = Router();

router.route("/create").post(createAdmin);
router.route("/login").post(adminLogin);
router.route("/approve").get(approvePost);
router.route("/reject").get(rejectPost);

export default router;