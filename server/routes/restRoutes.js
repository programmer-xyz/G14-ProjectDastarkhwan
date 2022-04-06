import { Router } from "express";
import {restLogin, restRegister,forgetPassResCheckUser,forgetPassUpdatePassRes,changePassRes,viewRestProfile,viewRestStats} from "../controller/restController";

const router = Router();


router.route("/restLogin").post(restLogin);
router.route("/restRegister").post(restRegister);
router.route("/resChangePass").post(changePassRes);
router.route("/resForgetPassV").post(forgetPassResCheckUser);
router.route("/resForgetPassU").post(forgetPassUpdatePassRes);
router.route("/restViewProfile").post(viewRestProfile);
router.route("/restStatProfile").post(viewRestStats);

export default router;