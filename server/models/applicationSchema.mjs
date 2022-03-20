import mongoose from "mongoose";
import addressSchema from "./addressSchema.mjs";


const applicationSchema = new mongoose.Schema({
    name:{type:String,required:true},
    userName:{type:String,required:true,unique:true},
    email:{type:String,required:true},
    address:{type:addressSchema}, //,required:true},
    isActive:{type:Boolean,required:true},
    createdAt:{type:Date,default:Date.now},
    lastUpdated:{type:Date,default:Date.now},
    password:{type:String,required:true},
    bio:{type:String},
    phoneNumber:{type:String,required:true},
    contactEmail:{type:String,required:true},
    contactName:{type:String,required:true},
    contactNumber:{type:String,required:true},
    registerationDoc:{type:Buffer,default:null},
    bankAccount:{type:String},
    accountType:{type:String,required:true},
    approvalStatus:{type:String,required:true},
    approved:{type:Boolean,required:true},
    image:{type:Buffer,default:null}
});

const application = mongoose.model("Application",applicationSchema);

export default application;

