import Rest from "../models/restuarauntSchema.mjs";
import { handleAsyncErr } from "../middleware/handleAsyncErr.js";
import bcrypt from "bcrypt";
import HandErr from "../utils/err.js";

//login 
export const restLogin =  handleAsyncErr(async (req,res, next) =>{
    const {userName, password} = req.body;

    if(!userName || !password){
       
        return next(new HandErr("userName or password missing", 400))
    }
    const user = await Rest.findOne({userName}); //.select("+password");
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

export const restRegister = handleAsyncErr(async (req, res, next) =>{
    const {name, email, phoneNumber, password, address,description, contactNum, contactName, contactEmail, accountNum, VerifiDoc} = req.body;

});