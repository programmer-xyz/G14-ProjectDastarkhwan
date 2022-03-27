import { Router } from "express";
import {userLogin} from "../controller/userController";

const router = Router();


router.route("/userLogin").post( userLogin );


export default router;