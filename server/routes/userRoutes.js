import { Router } from "express";
import {userLogin, userRegister,forgetPassCheckUser,forgetPassUpdateUser,changePassUser, mealDonation, rationDonation, moneyDonation} from "../controller/userController";
import {viewUserProfile, viewUserStats} from "../controller/userController";
const router = Router();


router.route("/login").post( userLogin );
router.route("/register").post( userRegister);
router.route("/forgetPassV").post(forgetPassCheckUser);
router.route("/forgetPassU").post(forgetPassUpdateUser);
router.route("/changePass").post(changePassUser);
router.route("/mealDonation").post(mealDonation);
router.route("/rationDonation").post(rationDonation);
router.route("/moneyDonation").post(moneyDonation);
router.route("/viewProfile").post(viewUserProfile);
router.route("/viewStats").post(viewUserStats);


export default router;