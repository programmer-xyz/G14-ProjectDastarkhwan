import mongoose from "mongoose";
const {Schema} = mongoose;
import addressSchema from "./addressSchema.mjs";
import dotenv from "dotenv";

dotenv.config({debug:true,path:"./../.env"});

mongoose.connect(process.env.DB_HOST,{useNewUrlParser:true});

const resturantSchema = new mongoose.Schema({
    name:{type:String,required:true},
    userName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    address:{type:addressSchema,required:true},
    isActive:{type:Boolean,default:false},
    createdAt:{type:Date, default:Date.now},
    lastUpdatedAt:{type:Date,default:Date.now},
    password:{type:String,required:true},
    bio:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    contactEmail:{type:String,required:true},
    contactNumber:{type:String,required:true},
    contactName:{type:String,required:true},
    mealsDonated:{type:Number,required:true},
    donations:[{type:Schema.Types.ObjectId, ref:'donation'}],
    applicationId:{type:Schema.Types.ObjectId,ref:'application'},
    image:{type:Buffer,default:null},
    descriptionOfImage:{type:String,default:null}

});

const restaurant = mongoose.model("restuarant",resturantSchema);

export default {resturantSchema};