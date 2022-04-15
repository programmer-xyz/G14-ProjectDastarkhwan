import { Router } from "express";
import {ngoLogin, ngoRegister,forgetPassResCheckUser,forgetPassUpdatePassNgo,changePassNgo,deleteProfile} from "../controller/ngoController";
import {restRequestNgo,userRequestNgo,myRequestNgo,viewNgoStats,viewNgoProfile,viewDonation,viewUserDonation,viewRestDonation,editProfileNgo,acceptDonation, findNgo} from "../controller/ngoController";
import multer from "multer";
const router = Router();
const upload = multer();

router.route("/login").post(ngoLogin);
// router.route("/ngoRegister").post(ngoRegister);
router.post("/register",upload.single("verifyDoc"),ngoRegister);
router.route("/changePass").post(changePassNgo);
router.route("/forgetPassV").post(forgetPassResCheckUser);
router.route("/forgerPassU").post(forgetPassUpdatePassNgo);
router.route("/deleteProfile").post(deleteProfile);
router.route("/viewStats").post(viewNgoStats);
router.route("/viewProfile").post(viewNgoProfile);
router.route("/viewDonation").post(viewDonation);
router.route("/viewUserDonation").post(viewUserDonation);
router.route("/viewRestDonation").post(viewRestDonation);
router.route("/editProfileNgo").post(editProfileNgo);
router.route("/acceptDonation").post(acceptDonation);
router.route("/myRequest").post(myRequestNgo);
router.route("/myRequest/user").post(userRequestNgo);
router.route("/myRequest/rest").post(restRequestNgo);
router.route("/findNgo").get(findNgo);

// router.route("/test").post(test);
export default router;