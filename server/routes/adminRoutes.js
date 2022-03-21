import { Router } from "express";
import {createAdmin, adminLogin, approvePost} from "../controller/authenicateController"

const router = Router();

router.route("/admin").post(createAdmin);
router.route("/adminLogin").post(adminLogin);
router.route("/approve").get(approvePost);


export default router;