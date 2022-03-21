import mongoose from "mongoose";
const {Schema} = mongoose;
import addressSchema from "./addressSchema.mjs";

const ngoSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    userName:{type:String,required:true},
    address:{type:addressSchema}, //,required:true},
    isActive:{type:Boolean,required:true},
    createdAt:{type:Date,default:Date.now},
    lastUpdated:{type:Date,default:Date.now},
    password:{type:String,required:true},
    description:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    contactEmail:{type:String,required:true},
    contactName:{type:String,required:true},
    contactNumber:{type:String,required:true},
    registerationDoc:{type:Buffer,default:null},
    bankAccount:{type:String},
    mealsAccepted:{type:Number,required:true},
    monetaryFundsAccepted:{type:Number,required:true},
    rationAccepted:{type:Number,required:true},
    donationAccepted:[{type:Schema.Types.ObjectId,ref:'donation'}],
    applicationId:{type:Schema.Types.ObjectId,ref:'application'},
    subscriptionList:[{type:Schema.Types.ObjectId,ref:'subscription'}],
    image:{type:Buffer,default:null}

});

const ngo = mongoose.model("NGO",ngoSchema);

export default ngo;