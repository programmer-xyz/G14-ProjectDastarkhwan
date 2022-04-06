import { Router } from "express";
import {userLogin, userRegister,forgetPassCheckUser,forgetPassUpdateUser,changePassUser, viewUserProfile,viewUserStats} from "../controller/userController";

const router = Router();


router.route("/userLogin").post( userLogin );
router.route("/userRegister").post( userRegister);
router.route("/userForgetPassV").post(forgetPassCheckUser);
router.route("/userForgetPassU").post(forgetPassUpdateUser);
router.route("/userChangePass").post(changePassUser);
router.route("/userProfile").post(viewUserProfile);
router.route("/userStats").post(viewUserStats);

export default router;