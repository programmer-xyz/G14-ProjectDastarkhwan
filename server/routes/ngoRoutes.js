import { Router } from "express";
import {ngoLogin, ngoRegister} from "../controller/ngoController";

const router = Router();


router.route("/ngoLogin").post(ngoLogin);
router.route("/ngoRegister").post(ngoRegister);

export default router;