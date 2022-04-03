import { Router } from "express";
import {ngoLogin, ngoRegister,forgetPassResCheckUser,forgetPassUpdatePassNgo,changePassNgo} from "../controller/ngoController";

const router = Router();


router.route("/ngoLogin").post(ngoLogin);
router.route("/ngoRegister").post(ngoRegister);
router.route("/ngoChangePass",changePassNgo);
router.route("/ngoForgetPassV",forgetPassResCheckUser);
router.route("/ngoForgerPassU",forgetPassUpdatePassNgo);

export default router;