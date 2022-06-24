import { Router } from "express";
import {adminLogin} from "../controller/authenicateController";
import {ngoLogin} from "../controller/ngoController";
import {restLogin} from "../controller/restController";
import {userLogin} from "../controller/userController";
const router = Router();

router.route("/admin/login").post(adminLogin);
router.route("/ngo/login").post(ngoLogin);
router.route("/rest/login").post(restLogin);
router.route("/user/login").post( userLogin );

export default router;