
import mongoose from "mongoose";
import addressSchema from "./addressSchema.mjs";
const {Schema} = mongoose

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    userName:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    createdAt:{type:Date,default:Date.now},
    isActive:{type:Boolean,default:false},
    lastUpdated:{type:Date,default:Date.now},
    address:{type:addressSchema,required:true},
    cnic:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    bio:{type:String,required:true},
    bankAccount:{type:String,default:null},
    mealDonated:{type:Number,required:true},
    amountDonated:{type:Number,required:true},
    rationDonated:{type:Number,required:true},
    donations:[{type:Schema.Types.ObjectId, ref:'Donation'}],
    image:{type:Buffer},
    descriptionOfImage:{type:String}

});

const user = mongoose.model("User",userSchema);

export default user;