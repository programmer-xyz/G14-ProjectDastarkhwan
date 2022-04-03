import Ngo from "../models/ngoSchema.mjs";
import { handleAsyncErr } from "../middleware/handleAsyncErr.js";
import bcrypt from "bcrypt";
import HandErr from "../utils/err.js";

//login 
export const ngoLogin =  handleAsyncErr(async (req,res, next) =>{
    const {email, password} = req.body;

    if(!email || !password){
       
        return next(new HandErr("email or password missing", 400))
    }
    const user = await Ngo.findOne({email}); //.select("+password");
    let pw = user.password;

    if(!user){
       
        return next(new HandErr("Wrong userName or password", 401));
    }
    let boolCheck  = await bcrypt.compare(password, pw);
    //boolCheck = user.password == password ? true : false; //add bcrypt here

    if(boolCheck){
        res.status(200).json({
            success: true,
            message: "user logged in",
            user
          });
    }
    else{
        return next(new HandErr("Password entered wrong", 401));
    }
    
});

export const ngoRegister = handleAsyncErr(async (req, res, next) =>{
    const {name, email, phoneNumber, password, address,description, contactNum, contactName, contactEmail, accountNum, VerifiDoc} = req.body;

});

