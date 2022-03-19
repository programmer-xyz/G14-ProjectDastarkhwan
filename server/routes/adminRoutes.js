import { Router } from "express";
import createAdmin from "../controller/authenicateController"

const router = Router();

router.route("/admin").post(createAdmin);

export default router;