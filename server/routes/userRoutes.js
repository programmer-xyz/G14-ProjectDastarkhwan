import { Router } from "express";
import {userLogin, userRegister} from "../controller/userController";

const router = Router();


router.route("/userLogin").post( userLogin );
router.route("/userRegister").post( userRegister);

export default router;