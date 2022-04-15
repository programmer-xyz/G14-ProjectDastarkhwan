import Ngo from "../models/ngoSchema.mjs";
import User from "../models/userSchema.mjs";
import Rest from "../models/restuarauntSchema.mjs";
import application from "../models/applicationSchema.mjs";
import donation from "../models/donationsSchema.mjs";
import { handleAsyncErr } from "../middleware/handleAsyncErr.js";
import bcrypt from "bcrypt";
import HandErr from "../utils/err.js";
import mongoose from "mongoose";


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
    if(!name || !email || !phoneNumber || !password || !description || !contactNum || !contactName || !contactEmail|| !userName || !address|| !accountNum||!req.file){
        return next(new HandErr("some fields are missing enter again!", 400))
    }
    let appUser = await application.find({email});
    let restUser = await Ngo.find({email});
    address = JSON.parse(address)
    if(appUser.length > 0 || restUser.length > 0){
        return next(new HandErr("user already exists", 401));
    }
    let pw = await bcrypt.hash(password, 12);
    // console.log(address);
    // console.log(req.file)
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

export const viewDonation = handleAsyncErr(async (req,res,next)=>
{
    let {ngoId} = req.body
    if(!!ngoId)
    {
        var id = mongoose.Types.ObjectId(ngoId);
        //validate NGO
        var response = await Ngo.findOne({'_id': id, 'isActive': true})
        console.log(response)
        if(!response)
        {
            return next(new HandErr("NGO with this id dosen't exist or has been deleted",401));
        }
        let donations = await donation.aggregate( [
            {
               $lookup:
                  {
                    from: 'users',
                    localField: 'donatedByUser',
                    foreignField: '_id',
                    as: 'userDetails'
                 }
            },
            {
                $lookup:
                   {
                     from: 'restuarants',
                     localField: 'donatedByRestaurant',
                     foreignField: '_id',
                     as: 'restDetails'
                  }
            },
            { $match: { acceptedBy:id }},
            { $project : {userDetails:
            {
                password:0,
                isActive:0,
                bankAccount:0,
                cnic:0,
                donations:0,
                createdAt:0,
                lastUpdated:0,
            }}},
            { $project : {restDetails:
                {
                    password:0,
                    isActive:0,
                    donations:0,
                    createdAt:0,
                    lastUpdatedAt:0,
            }}}
         ] )
        if(donations.length>=1)
        {
            res.status(200).json({
                success:true,
                message:"details found",
                data: donations
            });
        }
        else
        {
            res.status(200).json({
                success:false,
                message:"No pending donations to accept",
                data: donations
            });
        }

    }
    else
    {
        return next(new HandErr("Ngo id is missing",401));
    }
});

export const viewUserDonation= handleAsyncErr(async (req,res,next)=>{
    let {ngoId} = req.body
    if(!!ngoId)
    {
        var id = mongoose.Types.ObjectId(ngoId);
        //validate NGO
        var response = await Ngo.findOne({'_id': id, 'isActive': true})
        console.log(response)
        if(!response)
        {
            return next(new HandErr("NGO with this id dosen't exist or has been deleted",401));
        }
        let donations = await donation.aggregate( [
            {
               $lookup:
                  {
                    from: 'users',
                    localField: 'donatedByUser',
                    foreignField: '_id',
                    as: 'userDetails'
                 }
            },
            { $match: { acceptedBy:id ,donatedByRestaurant:null}},
            { $project : {userDetails:
            {
                password:0,
                isActive:0,
                bankAccount:0,
                cnic:0,
                donations:0,
                createdAt:0,
                lastUpdated:0,
            }}}
         ] )
        if(donations.length>=1)
        {
            res.status(200).json({
                success:true,
                message:"details found",
                data: donations
            });
        }
        else
        {
            res.status(200).json({
                success:false,
                message:"No pending donations to accept",
                data: donations
            });
        }

    }
    else
    {
        return next(new HandErr("Ngo id is missing",401));
    }
});
export const viewRestDonation = handleAsyncErr(async (req,res,next)=>
{
    let {ngoId} = req.body
    if(!!ngoId)
    {
        var id = mongoose.Types.ObjectId(ngoId);
        //validate NGO
        var response = await Ngo.findOne({'_id': id, 'isActive': true})
        console.log(response)
        if(!response)
        {
            return next(new HandErr("NGO with this id dosen't exist or has been deleted",401));
        }
        let donations = await donation.aggregate( [
            {
               $lookup:
                  {
                    from: 'restuarants',
                    localField: 'donatedByRestaurant',
                    foreignField: '_id',
                    as: 'restDetails'
                 }
            },
            { $match: { acceptedBy:id ,donatedByUser:null}},
            { $project : {restDetails:
            {
                password:0,
                isActive:0,
                donations:0,
                createdAt:0,
                lastUpdatedAt:0,
            }}}
         ] )
        if(donations.length>=1)
        {
            res.status(200).json({
                success:true,
                message:"details found",
                data: donations
            });
        }
        else
        {
            res.status(200).json({
                success:false,
                message:"No pending donations to accept",
                data: donations
            });
        }
    }
    else
    {
        return next(new HandErr("Ngo id is missing",401));
    }
});

export const acceptDonation = handleAsyncErr(async(req,res,next)=>
{
    let {donationId} = req.body
    if(!!donationId)
    {
        let donations = await donation.findOne({'_id':donationId,'isActive':true})
        if(!!donations)
        {
            const user = await User.findOne({'_id':donations.donatedByUser,'isActive':true});
            const rest = await Rest.findOne({'_id':donations.donatedByRestaurant,'isActive':true});
            if(!user && !rest)
            {
                const res = donation.updateOne({'_id':donations.donatedByUser,'isActive':true},{'isActive':false});
                return next(new HandErr("User/restuarant is no longer active",401));
            }
            const session = await mongoose.startSession();
            session.startTransaction();
              let update = {}
              let updateNgo = {}
                 if(donations.typeOfDonation==='meal')
                 {
                     update['mealDonated'] = donations.amount;
                     updateNgo['mealsAccepted'] = donations.amount;
                 }
                 else
                 {
                     update['rationDonated'] = 1;
                     updateNgo['rationAccepted'] = 1;
                 }
            try{
                if(!!donations.donatedByUser)
                {
                    const userUpdate = await User.updateOne({'_id':donations.donatedByUser,'isActive':true},{$inc:update})
                    
                }
                else
                {
                    const restUpdate = await Rest.updateOne({'_id':donations.donatedByRestaurant,'isActive':true},{$inc:{
                        'mealsDonated':donations.amount
                    }});
                }
                const ngoUpdate = await Ngo.updateOne({'_id':donations.acceptedBy,'isActive':true},{$inc:updateNgo,$push:{donationAccepted:donationId}},{ new: true, useFindAndModify: false })
                const donationUpdate = await donation.findOneAndUpdate({'_id':donationId,'isActive':true},{'isActive':false,'donataionComplete':true})
                // console.log(donationUpdate)
            }   
            catch (error)
            {
                await session.abortTransaction();
                return next(new HandErr(error,401));

            }
            await session.commitTransaction();
            await session.endSession();
            res.status(200).json({
                success:true,
                message:"Donation has been accpeted and completed"
            });
        }
        else
        {
            return next(new HandErr("Donation is no longer Active",401));
        }
    }
    else
    {
        return next(new HandErr("Donation id is missing",401));
    }
})
export const editProfileNgo = handleAsyncErr(async (req, res, next)=>{

    const {name,userName, accountNum, phoneNumber, description, address, _id,  contactName, contactEmail, contactNumber} = req.body;
    let editObj = {name: name,userName:userName, bankAccount:accountNum, phoneNumber:phoneNumber, description:description, address:address, contactName: contactName,contactEmail:contactEmail,contactNumber:contactNumber,lastUpdated:Date.now()}

    if(!_id){
        return next(new HandErr("id missing",400));
    }
    let user = await Ngo.findOneAndUpdate({_id:_id, isActive:true}, editObj);

    if(!user){
        return next(new HandErr("user profile not found or account is no longer active",400));
    }
    res.status(200).json({
        success:true,
        message:"Successfully updated user profile",
        body: user
    });
});
export const myRequestNgo = handleAsyncErr(async(req,res,next)=>
{
    let {email} = req.body;
    if(!!email)
    {
        let ngo = await Ngo.findOne({'email':email,'isActive':true}).populate({path:'donationAccepted',
        populate:{
            path: 'donatedByUser',
            model: 'User',
            select: 'name email userName address description phoneNumber'
        },populate:
        {
            path: 'donatedByRestaurant',
            model: 'restuarant',
            select: 'name email userName address description phoneNumber contactEmail contactName contactNumber '
        }});
        if(!!ngo)
        {   
            res.status(200).json({
                success:true,
                message:"Successfully found donations details",
                body: ngo.donationAccepted
            });
            
        }
        else
        {
            return next(new HandErr("NGO dosen't exist or is no longer active",400));
        }
        
    }
    else
    {
        return next(new HandErr("Email is missing",400))
    }
   
});

export const userRequestNgo = handleAsyncErr(async(req,res,next)=>
{
    let {email} = req.body;
    if(!!email)
    {
        let ngo = await Ngo.findOne({'email':email,'isActive':true}).populate({path:'donationAccepted',
        match:{'donatedByRestaurant':null},
        populate:{
            path: 'donatedByUser',
            
            model: 'User',
            select: 'name email userName address description phoneNumber'
        }
        });
        if(!!ngo)
        {   
            //console.log(ngo.donationAccepted.length)
            res.status(200).json({
                success:true,
                message:"Successfully found donations details",
                body: ngo.donationAccepted
            });
            
        }
        else
        {
            return next(new HandErr("NGO dosen't exist or is no longer active",400));
        }
        
    }
    else
    {
        return next(new HandErr("Email is missing",400))
    }
   
});
export const restRequestNgo = handleAsyncErr(async(req,res,next)=>
{
    let {email} = req.body;
    if(!!email)
    {
        let ngo = await Ngo.findOne({'email':email,'isActive':true, 'donatedByUser':null}).populate({path:'donationAccepted',
        match:{'donatedByUser':null},
        populate:{
            path: 'donatedByRestaurant',
            model: 'restuarant',
            select: 'name email userName address description phoneNumber contactEmail contactName contactNumber '
        }
        });
        if(!!ngo)
        {   
            //console.log(ngo.donationAccepted.length)
            res.status(200).json({
                success:true,
                message:"Successfully found donations details",
                body: ngo.donationAccepted
            });
            
        }
        else
        {
            return next(new HandErr("NGO dosen't exist or is no longer active",400));
        }
        
    }
    else
    {
        return next(new HandErr("Email is missing",400))
    }
   
});

