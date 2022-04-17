import { Router } from "express";
import {myRequestRest, restLogin, restRegister,forgetPassResCheckUser,forgetPassUpdatePassRes,changePassRes,viewRestProfile,viewRestStats, editProfileRest, mealDonation } from "../controller/restController";
import {isAuthenticatedUser} from "../middleware/auth";

const router = Router();
import multer from "multer";
const upload = multer();

router.route("/login").post(restLogin);
router.route("/register").post(restRegister);
router.route("/changePass").post(isAuthenticatedUser,changePassRes);
router.route("/forgetPassV").post(isAuthenticatedUser,forgetPassResCheckUser);
router.route("/forgetPassU").post(isAuthenticatedUser,forgetPassUpdatePassRes);
router.route("/viewProfile").post(isAuthenticatedUser,viewRestProfile);
router.route("/statProfile").post(isAuthenticatedUser,viewRestStats);
router.route("/editProfileRest").post(isAuthenticatedUser,editProfileRest);
router.route("/myRequest").post(isAuthenticatedUser,myRequestRest);
//router.route("/mealDonation").post(mealDonation);
router.post("/mealDonation",upload.single("image"),mealDonation);
export default router;