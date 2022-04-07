import Ngo from "../models/ngoSchema.mjs";
import application from "../models/applicationSchema.mjs";
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
    
    if(!user.isActive){
        return next(new HandErr("User not exist", 401));
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
    else
    {
        return next(new HandErr("Password entered wrong", 401));
    }
    
});

export const ngoRegister = handleAsyncErr(async (req, res, next) =>{
    let {name, email, phoneNumber, password, address,description, contactNum, contactName, contactEmail, accountNum, userName} = req.body;
    if(!name || !email || !phoneNumber || !password || !description || !contactNum || !contactName || !contactEmail|| !userName || !address|| !accountNum){
        return next(new HandErr("some fields are missing enter again!", 400))
    }
    let appUser = await application.find({email});
    let restUser = await Ngo.find({email});
    address = JSON.parse(address)
    if(appUser.length > 0 || restUser.length > 0){
        return next(new HandErr("user already exists", 401));
    }
    let pw = await bcrypt.hash(password, 12);
    console.log(address);
    console.log(req.file)
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
        accountType: "ngo",
        approvalStatus: "inProgress",
        approved: false,
        registerationDoc:req.file.buffer,
        bankAccount:accountNum
    });
    //tokenMaker(user, 201, res);
    res.status(200).json({
        success: true,
        message: "user added to app table",
        restApp 
      });
    
});

export const forgetPassResCheckUser = handleAsyncErr(async(req,res,next)=>{
    const {email} = req.body;
    if (!email)
    {
        return next(new HandErr("email address was not found",400));
    }
    
    // here we will first find the user 
    const ngoobj = await Ngo.findOne({email});
    console.log(ngoobj);
    if (!ngoobj)
    {
        return next(new HandErr("No user found with the specific email",401))
    }
    else
    {
        res.send({
            success:true,
            message:"user found",
        });
    }
    
});

export const forgetPassUpdatePassNgo = handleAsyncErr(async(req,res,next)=>{
    const {email,newPassword} = req.body;
    if (!email || !newPassword)
    {
        return next(new HandErr("email or new Password is missing",400));
    }
    let filter = {email:email};
    let hashPass = await bcrypt.hash(newPassword,12);
    let update = {password:hashPass};
    let updatedNgo = await Ngo.findOneAndUpdate(filter,update);
    if (updatedNgo)
    {
        res.status(200).json({
            success:true,
            message:"Successfully updated password"
        });
    }
    else
    {
        return next(new HandErr("Error while updating the password",401));
    }
});

export const changePassNgo = handleAsyncErr(async(req,res,next)=>{
    const {email,newPassword} = req.body;
    if (!email || !newPassword)
    {
        return next(new HandErr("email or password is missing",400));
    }
    let filter = {email:email};
    let hashPass = await bcrypt.hash(newPassword,12);
    let update = {password:hashPass};
    let updatedNgo = await Ngo.findOneAndUpdate(filter,update,{new:true});
    console.log(updatedNgo);
    if (updatedNgo)
    {
        res.status(200).json({
            success:true,
            message:"Successfully updated password"
        });
    }
    else
    {
        return next(new HandErr("Error while updating the password",401));
    }
});

//view account profile for actor Ngo
export const viewNgoProfile = handleAsyncErr(async (req,res,next)=>
{
    let {email} = req.body
    console.log(email)
    if(!email)
    {
        return next(new HandErr("email is missing",400));
    }
    let ngoProfile = await Ngo.findOne({'email':email, 'isActive':true},{password:0});
    console.log(ngoProfile)
    if(!!ngoProfile)
    {
        res.status(200).json({
            success:true,
            message:"Successfully found resturant profile",
            body: ngoProfile
        });
    }
    else
    {
        return next(new HandErr("Ngo profile not found or account is no longer active",400));
    }
});
//view account stats for actor Ngo
export const viewNgoStats = handleAsyncErr(async (req,res,next)=>
{
    let {email} = req.body
    if(!email)
    {
        return next(new HandErr("email is missing",400));
    }
    let ngoStats = await Ngo.findOne({'email':email, 'isActive':true},{"mealsAccepted":1,"monetaryFundsAccepted":1,"rationAccepted":1});
    if(!!ngoStats)
    {
        res.status(200).json({
            success:true,
            message:"Successfully found resturant stats",
            body: ngoStats
        });
    }
    else
    {
        return next(new HandErr("resturant not found",400));
    }
});

export const deleteProfile = handleAsyncErr(async (req,res,next)=>
{
    let {email,password} = req.body;
    if(!!email && !!password)
    {
        let ngoProfile = await Ngo.findOne({'email':email, 'isActive': true});
        if(!!ngoProfile)
        {
            let bit = await bcrypt.compare(password,ngoProfile.password);
            if(bit)
            {
                let updateResponse = await Ngo.updateOne({'email':email, 'isActive': true},{'isActive':false, 'lastUpdated':Date.now()});
                if(updateResponse.modifiedCount===0)
                {
                    res.status(200).json({
                        success:false,
                        message:"Ngo account couldn't be deleted",
                    });
                }
                else
                {
                    res.status(200).json({
                        success:true,
                        message:"Ngo account deleted",
                    });
                }
            }
            else
            {
                res.status(200).json({
                    success:false,
                    message:"Incorrect password",
                });
            }
        }
        else
        {
            return next(new HandErr("Ngo profile not found or account is no longer active",400));
        }
    } 
    else
    {
        return next(new HandErr("Error as email or password is missing",401));
    }
});

// export const viewDonation = handleAsyncErr(async (req,res,next)=>
// {

// });

// export const viewUserDonation= handleAsyncErr(async (req,res,next)=>{

// });
// export const viewRestDonation = handleAsyncErr(async (req,res,next)=>
// {

// });
