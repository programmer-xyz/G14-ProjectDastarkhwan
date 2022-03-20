import Admin from "../models/adminSchema.mjs";
import HandErr from "../utils/err.js";
import { handleAsyncErr } from "../middleware/handleAsyncErr.js";
import bcrypt from "bcrypt";

//test func not an api will be deleted later
export const createAdmin = async (req,res) =>{
    const {userName, password} = req.body;
    console.log(userName)
    //const admin2 = await admin.create(req.body);
    //console.log(admin2)
    res.status(201).json({
        success:true
    })
    let pw = await bcrypt.hash(password, 12);
    const ad = new Admin({userName, password : pw});
    ad.save().then(() =>{
        console.log('RO made')
    }).catch(err => console.log(`ro not made \n ${err}`))
}

//login for admin
export const adminLogin = handleAsyncErr(async (req,res, next) =>{
    const {userName, password} = req.body;

    if(!userName || !password){
       
        return next(new HandErr("userName or password missing", 400))
    }
    const user = await Admin.findOne({userName}); //.select("+password");
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



