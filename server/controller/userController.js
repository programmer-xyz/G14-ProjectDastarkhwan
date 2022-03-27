import User from "../models/userSchema.mjs";
import { handleAsyncErr } from "../middleware/handleAsyncErr.js";
import bcrypt from "bcrypt";
import HandErr from "../utils/err.js";
import {tokenMaker} from "../utils/tokenManager"

//login 
export const userLogin =  handleAsyncErr(async (req,res, next) =>{
    const {email, password} = req.body;

    if(!email || !password){
       
        return next(new HandErr("email or password missing", 400))
    }
    const user = await User.findOne({email}); 
    let pw = user.password;

    if(!user){
       
        return next(new HandErr("Wrong email or password", 401));
    }
    let boolCheck  = await bcrypt.compare(password, pw);
    //boolCheck = user.password == password ? true : false; //add bcrypt here

    if(boolCheck){
        tokenMaker(user, 201, res);
        // res.status(200).json({
        //     success: true,
        //     message: "user logged in",
        //     user
        //   });
    }
    else{
        return next(new HandErr("Password entered wrong", 401));
    }

});

export const userRegister = handleAsyncErr(async (req, res, next) =>{
    const {name, email, phoneNumber, password,description, contactNum, userName,address, CNIC} = req.body;
    console.log(req.body);
   
    if(!name || !email || !phoneNumber || !password || !description || !contactNum ||!CNIC || !userName || !address){
        return next(new HandErr("some fields are missing enter again!", 400))
    }
    let appUser = await application.find({email});
    let user = await User.find({email});
   
    if(appUser.length > 0 || user.length > 0){
        return next(new HandErr("user already exists", 401));
    }
    let pw = await bcrypt.hash(password, 12);
    //console.log(address);
    
    const userApp = await user.create({
        name: name, 
        email: email, 
        phoneNumber: phoneNumber, 
        password: pw , 
        address: address,
        description: description, 
        userName : userName,
        contactNumber: contactNum, 
        isActive: true,
        cnic:CNIC,
        description:description,
        mealDonated:0,
        amountDonated:0,
        rationDonated:0,
    });
    // res.status(200).json({
    //     success: true,
    //     message: "user added to app table",
    //     restApp 
    //   });
      tokenMaker(user, 201, res);   
});