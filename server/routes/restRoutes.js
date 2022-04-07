import { Router } from "express";
import {restLogin, restRegister,forgetPassResCheckUser,forgetPassUpdatePassRes,changePassRes,viewRestProfile,viewRestStats} from "../controller/restController";

const router = Router();


router.route("/login").post(restLogin);
router.route("/register").post(restRegister);
router.route("/changePass").post(changePassRes);
router.route("/forgetPassV").post(forgetPassResCheckUser);
router.route("/forgetPassU").post(forgetPassUpdatePassRes);
router.route("/viewProfile").post(viewRestProfile);
router.route("/statProfile").post(viewRestStats);

export default router;