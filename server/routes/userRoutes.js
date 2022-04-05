import { Router } from "express";
import {userLogin, userRegister,forgetPassCheckUser,forgetPassUpdateUser,changePassUser, mealDonation} from "../controller/userController";

const router = Router();


router.route("/userLogin").post( userLogin );
router.route("/userRegister").post( userRegister);
router.route("/userForgetPassV").post(forgetPassCheckUser);
router.route("/userForgetPassU").post(forgetPassUpdateUser);
router.route("/userChangePass").post(changePassUser);
router.route("/userMealDonation").post(mealDonation);

export default router;