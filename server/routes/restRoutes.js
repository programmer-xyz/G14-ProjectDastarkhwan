import { Router } from "express";
import {restLogin, restRegister} from "../controller/restController";

const router = Router();


router.route("/restLogin").post(restLogin);
router.route("/restRegister").post(restRegister);

export default router;