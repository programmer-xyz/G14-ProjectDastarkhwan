import { Router } from "express";
import {userLogin, userRegister,forgetPassCheckUser,forgetPassUpdateUser,changePassUser, mealDonation, rationDonation, moneyDonation} from "../controller/userController";

import {deleteProfile,viewUserProfile, viewUserStats, editProfileUser,myRequestUser} from "../controller/userController";
const router = Router();
import multer from "multer";
const upload = multer();


router.route("/register").post( userRegister);
router.route("/forgetPassV").post(forgetPassCheckUser);
router.route("/forgetPassU").post(forgetPassUpdateUser);
router.route("/changePass").post(changePassUser);
//router.route("/mealDonation").post(mealDonation);
router.post("/mealDonation",upload.single("image"),mealDonation);
//router.route("/rationDonation").post(rationDonation);
router.post("/rationDonation",upload.single("image"),rationDonation);

router.route("/moneyDonation").post(moneyDonation);
router.route("/viewProfile").post(viewUserProfile);
router.route("/viewStats").post(viewUserStats);
router.route("/editProfileUser").post(editProfileUser);
router.route("/myRequest").post(myRequestUser);

router.route('/deleteProfile').post(deleteProfile)
export default router;