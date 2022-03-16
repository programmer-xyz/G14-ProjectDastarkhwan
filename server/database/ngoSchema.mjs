import mongoose from "mongoose";
const {Schema} = mongoose;
import addressSchema from "./addressSchema.mjs";
import dotenv from "dotenv";

dotenv.config({debug:true,path:"./../.env"});

mongoose.connect(process.env.DB_HOST,{useNewUrlParser:true});

const ngoSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    userName:{type:String,required:true},
    address:{type:addressSchema,required:true},
    isActive:{type:Boolean,required:true},
    createdAt:{type:Date,default:Date.now},
    lastUpdated:{type:Date,default:Date.now},
    password:{type:String,required:true},
    bio:{type:String,required:true},
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
// let addressOne = {
//     city:"Lahore",
//     country:"Pakistan",
//     streetNumber:"14 st",
//     houseNumber:"512 F2"
// }
// const ngoOne = new ngo({
//     name:"Zakat foundation",
//     email:"zk@gmail.com",
//     userName:"ZkFoundation",
//     address:addressOne,
//     isActive:true,
//     createdAt:Date.now(),
//     lastUpdated:Date.now(),
//     password:"hello123",
//     bio:"We donate zakat",
//     phoneNumber:"042-313141",
//     contactEmail:"Lalopanjo@gmail.com",
//     contactName:"lalopanjo",
//     contactNumber:"030321314",
//     mealsAccepted:5,
//     monetaryFundsAccepted:10000,
//     rationAccepted:10,
//     applicationId:'6231bed98fbd6660e73cc77d'
// });

// ngoOne.save((err)=>{
//     if(err)
//     {
//         console.log("Could not save");
//     }
//     else
//     {
//         mongoose.connection.close();
//     }
// });
export default {ngoSchema};