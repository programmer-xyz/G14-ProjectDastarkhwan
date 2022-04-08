import Rest from "../models/restuarauntSchema.mjs";
import application from "../models/applicationSchema.mjs";
import { handleAsyncErr } from "../middleware/handleAsyncErr.js";
import bcrypt, { hashSync } from "bcrypt";
import HandErr from "../utils/err.js";
import {tokenMaker} from "../utils/tokenManager"
import Ngo from "../models/ngoSchema.mjs"
import Donation from "../models/donationsSchema.mjs";

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
    if(!user.isActive){
        return next(new HandErr("User not exist", 401));
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
        return next(new HandErr("No email address given",400));
    }
    
    // here we will first find the user 
    const rest = await Rest.findOne({email});
    // console.log(rest);
    if (!rest)
    {
        return next(new HandErr("No user found with the specific email",401))
    }
    else
    {   
        res.send({
            success:true,
            message:"user found"
        })
    }
});

export const forgetPassUpdatePassRes = handleAsyncErr(async(req,res,next)=>{
    const {email,newPassword} = req.body;
    if (!email || !newPassword)
    {
        return next(new HandErr("email or new Password is missing",400));
    }
    let filter = {email:email};
    let hashPass = await bcrypt.hash(newPassword,12);
    let update = {password:hashPass};
    let updatedRest = await Rest.findOneAndUpdate(filter,update,{new:true});
    console.log(updatedRest);
    if (updatedRest)
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


export const changePassRes = handleAsyncErr(async(req,res,next)=>{
    const {email,newPassword} = req.body;
    if (!email || !newPassword)
    {
        return next(new HandErr("email or password is missing",400));
    }
    let filter = {email:email};
    let hashPass = await bcrypt.hash(newPassword,12);
    let update = {password:hashPass};
    let updatedRest = await Ngo.findOneAndUpdate(filter,update,{new:true});
    console.log(updatedRest);
    if (updatedRest)
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
//view account profile for actor resturant
export const viewRestProfile = handleAsyncErr(async (req,res,next)=>
{
    let {email} = req.body
    console.log(email)
    if(!email)
    {
        return next(new HandErr("email is missing",400));
    }
    let restProfile = await Rest.findOne({'email':email, 'isActive':true},{password:0});
    console.log(restProfile)
    if(!!restProfile)
    {
        res.status(200).json({
            success:true,
            message:"Successfully found resturant profile",
            body: restProfile
        });
    }
    else
    {
        return next(new HandErr("resturant profile not found or account is no longer active",400));
    }
});
//view account stats for actor resturant
export const viewRestStats = handleAsyncErr(async (req,res,next)=>
{
    let {email} = req.body
    if(!email)
    {
        return next(new HandErr("email is missing",400));
    }
    let restStats = await Rest.findOne({'email':email, 'isActive':true},{"mealDonated":1});
    if(!!restStats)
    {
        res.status(200).json({
            success:true,
            message:"Successfully found resturant stats",
            body: restStats
        });
    }
    else
    {
        return next(new HandErr("resturant not found",400));
    }
});

export const editProfileRest = handleAsyncErr(async (req, res, next)=>{
    const {name, userName, phoneNumber, description, address, _id,  contactName, contactEmail, contactNumber} = req.body;
    let editObj = {name: name,userName:userName, phoneNumber:phoneNumber, description:description, address:address, contactName: contactName,contactEmail:contactEmail,contactNumber:contactNumber,lastUpdated:Date.now()}

    if(!_id){
        return next(new HandErr("id missing",400));
    }
    let user = await Rest.findOneAndUpdate({_id:_id, isActive:true}, editObj);

    if(!user){
        return next(new HandErr("user profile not found or account is no longer active",400));
    }
    res.status(200).json({
        success:true,
        message:"Successfully updated user profile",
        body: user
    });
});

export const mealDonation = handleAsyncErr(async (req,res,next) =>{
    //user email and selected ngo will be sent from frontend

    let image = req.file.buffer;
    const {address, description, email, ngoIdentifier} = req.body;

    if( !address|| !description||!image){
        return next(new HandErr("some fields are missing", 401))
    }
    const userDonor = await Rest.findOne({email:email, isActive:true})

    const ngoSelected = await Ngo.findOne({email:ngoIdentifier,isActive:true})
    
    if(!ngoSelected.isActive){
        return next(new HandErr("Ngo is inactive", 401))
    }
 
    const donation = await Donation.insertMany({
        donatedByRest: userDonor._id,
        acceptedBy: ngoSelected._id,
        typeOfDonation:"meal",
        donataionComplete:false,
        amount:1,
        image:image,
        address: address,
        isActive:true
    });

    let user1 = await Rest.findByIdAndUpdate(userDonor._id,{$push: {donations:donation[0]._id}}, { new: true, useFindAndModify: false }) //{donations: userDonor.donations.push(mongoose.Types.ObjectId(donation._id))})
    //console.log(user1)
    res.status(200).json({
        success: true,
        message: "donation made to ngo",
        donation
      });
})
