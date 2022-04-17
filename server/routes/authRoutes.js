import { Router } from "express";
import {isAuthenticatedUser} from "../middleware/auth";
const router = Router();


router.route("/isLoggedin").post(isAuthenticatedUser);


export default router;