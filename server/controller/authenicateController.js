import Admin from "../models/adminSchema.mjs";
import application from "../models/applicationSchema.mjs";
import restaurant from "../models/restuarauntSchema.mjs";
import ngo from "../models/ngoSchema.mjs";
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

//admin approve post
export const approvePost = handleAsyncErr(async(req, res, next) =>{
    const email = req.body.email;
    const appObj = await application.findOne({email});
    if(appObj.approved == true || appObj.approvalStatus== "rejected"||  appObj.approvalStatus == "approved" || !appObj.isActive){
        return next(new HandErr("Cannot update application expired or already approved", 400))
    }
    
    if(appObj.accountType == "restaurant"){
        const restObj = await restaurant.create({
            name: appObj.name, 
            email: appObj.email, 
            phoneNumber: appObj.phoneNumber, 
            password: appObj.password , 
            address: appObj.address,
            description: appObj.description, 
            userName : appObj.userName,
            contactNumber: appObj.contactNumber, 
            contactName: appObj.contactName, 
            contactEmail: appObj.email,
            mealsDonated: 0,
            applicationId: appObj._id,
            isActive: true
        });
    }
    else if (appObj.accountType == "ngo"){
        const ngoObj = await ngo.create({
            name: appObj.name, 
            email: appObj.email, 
            phoneNumber: appObj.phoneNumber, 
            password: appObj.password , 
            address: appObj.address,
            description: appObj.description, 
            userName : appObj.userName,
            contactNumber: appObj.contactNumber, 
            contactName: appObj.contactName, 
            contactEmail: appObj.email,
            mealsAccepted: 0,
            monetaryFundsAccepted:0,
            rationAccepted:0,
            applicationId: appObj._id,
            isActive: true
        });
    }
    const appObjNew = await application.findOneAndUpdate({email}, {approved: true, approvalStatus:"approved", isActive:false});

    res.status(200).json({
        success: true,
        message: "user account approved",
      });

});

export const rejectPost = handleAsyncErr(async(req, res, next) =>{
    const email = req.body.email;
    const appObj = await application.findOne({email});
    if(appObj.approved == true || appObj.approvalStatus== "rejected"||  appObj.approvalStatus == "approved" || !appObj.isActive){
        return next(new HandErr("Cannot update application expired or already approved", 400))
    }
    
    const appObjNew = await application.findOneAndUpdate({email}, {approved: false, approvalStatus:"rejected", isActive:false});

    res.status(200).json({
        success: true,
        message: "user account rejected",
      });

});

export const viewApplications = handleAsyncErr(async(req, res, next) =>{
    const apps = await application.find({isActive:true})
    if(!apps){
        return next(new HandErr("no applications to displsy", 400))
    }
    
    res.status(200).json({
        success: true,
        message: "list returned",
        apps:apps
      });


});





