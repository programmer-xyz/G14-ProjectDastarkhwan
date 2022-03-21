import Rest from "../models/restuarauntSchema.mjs";
import application from "../models/applicationSchema.mjs";
import { handleAsyncErr } from "../middleware/handleAsyncErr.js";
import bcrypt from "bcrypt";
import HandErr from "../utils/err.js";

//login 
export const restLogin =  handleAsyncErr(async (req,res, next) =>{
    const {email, password} = req.body;

    if(!email || !password){
       
        return next(new HandErr("email or password missing", 400))
    }
    const user = await Rest.findOne({email}); 
    let pw = user.password;

    if(!user){
       
        return next(new HandErr("Wrong email or password", 401));
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
    const {name, email, phoneNumber, password,description, contactNum, contactName, contactEmail, userName,address} = req.body;
    console.log(req.body);
    console.log(contactName);
    if(!name || !email || !phoneNumber || !password || !description || !contactNum || !contactName || !contactEmail|| !userName || !address){
        return next(new HandErr("some fields are missing enter again!", 400))
    }
    let appUser = await application.find({email});
    let restUser = await Rest.find({email});
   
    if(appUser.length > 0 || restUser.length > 0){
        return next(new HandErr("user already exists", 401));
    }
    let pw = await bcrypt.hash(password, 12);
    //console.log(address);
  
 
    const restApp = await application.create({
        name: name, 
        email: email, 
        phoneNumber: phoneNumber, 
        password: pw , 
        address: address,
        description: description, 
        userName : userName,
        contactNumber: contactNum, 
        contactName: contactName, 
        contactEmail: email,
        isActive: true,
        accountType: "restaurant",
        approvalStatus: "inProgress",
        approved: false
    });
    res.status(200).json({
        success: true,
        message: "user added to app table",
        restApp 
      });
       
});