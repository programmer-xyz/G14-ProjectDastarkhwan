import { Router } from "express";
import {ngoLogin, ngoRegister,forgetPassResCheckUser,forgetPassUpdatePassNgo,changePassNgo} from "../controller/ngoController";
import multer from "multer";
const router = Router();
const upload = multer();

router.route("/ngoLogin").post(ngoLogin);
// router.route("/ngoRegister").post(ngoRegister);
router.post("/ngoRegister",upload.single("verifyDoc"),ngoRegister);
router.route("/ngoChangePass",changePassNgo);
router.route("/ngoForgetPassV",forgetPassResCheckUser);
router.route("/ngoForgerPassU",forgetPassUpdatePassNgo);

export default router;