import { Router } from "express";
import {ngoLogin, ngoRegister,forgetPassResCheckUser,forgetPassUpdatePassNgo,changePassNgo,deleteProfile} from "../controller/ngoController";
import {viewNgoStats,viewNgoProfile} from "../controller/ngoController";
import multer from "multer";
const router = Router();
const upload = multer();

router.route("/login").post(ngoLogin);
// router.route("/ngoRegister").post(ngoRegister);
router.post("/register",upload.single("verifyDoc"),ngoRegister);
router.route("/changePass",changePassNgo);
router.route("/forgetPassV",forgetPassResCheckUser);
router.route("/forgerPassU",forgetPassUpdatePassNgo);
router.route("/deleteProfile",deleteProfile);
router.route("/viewStats",viewNgoStats);
router.route("/viewProfile",viewNgoProfile);
export default router;