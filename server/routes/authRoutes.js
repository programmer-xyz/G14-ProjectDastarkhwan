import { Router } from "express";
import {isAuthenticatedUser} from "../middleware/auth";
const router = Router();


router.route("/isLoggedin").get(isAuthenticatedUser);


export default router;