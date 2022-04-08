import { Router } from "express";
import {myRequestRest, restLogin, restRegister,forgetPassResCheckUser,forgetPassUpdatePassRes,changePassRes,viewRestProfile,viewRestStats, editProfileRest} from "../controller/restController";

const router = Router();


router.route("/login").post(restLogin);
router.route("/register").post(restRegister);
router.route("/changePass").post(changePassRes);
router.route("/forgetPassV").post(forgetPassResCheckUser);
router.route("/forgetPassU").post(forgetPassUpdatePassRes);
router.route("/viewProfile").post(viewRestProfile);
router.route("/statProfile").post(viewRestStats);
router.route("/editProfileRest").post(editProfileRest);
router.route("/myRequest").post(myRequestRest)
export default router;