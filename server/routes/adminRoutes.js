import { Router } from "express";
import {createAdmin, adminLogin} from "../controller/authenicateController"

const router = Router();

router.route("/admin").post(createAdmin);
router.route("/adminLogin").post(adminLogin)


export default router;