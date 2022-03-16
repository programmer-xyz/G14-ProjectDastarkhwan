import mongoose from "mongoose";
import addressSchema from "./addressSchema.mjs";
import dotenv from "dotenv";
dotenv.config({debug:true,path:"./../.env"});

mongoose.connect(process.env.DB_HOST,{useNewUrlParser:true});

const applicationSchema = new mongoose.Schema({
    name:{type:String,required:true},
    userName:{type:String,required:true,unique:true},
    email:{type:String,required:true},
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
    accountType:{type:String,required:true},
    approvalStatus:{type:String,required:true},
    approved:{type:Boolean,required:true},
    image:{type:Buffer,default:null}
});

const application = mongoose.model("application",applicationSchema);

// let adressOne = {
//     city:"Lahore",
//     country:"Pakistan",
//     streetNumber:"14 st",
//     houseNumber:"512 F2"
// }
// const applicationOne = new application({

//     name:"Zakat foundation",
//     userName:"ZKfoundation",
//     email:"Zkfoundation@gmail.com",
//     address:adressOne,
//     isActive:true,
//     createdAt:Date.now(),
//     lastUpdated:Date.now(),
//     password:"hello123",
//     bio:"we donate zakat",
//     phoneNumber:"041231331",
//     contactEmail:"lalopanjo@gmail.com",
//     contactName:"Lalopanjo",
//     contactNumber:"03032131314",
//     accountType:"NGO",
//     approvalStatus:"Approved",
//     approved:true,

// });
// applicationOne.save((err)=>{
//     if(err)
//     {
//         console.log("Error while inserting into the application One table");
//     }
//     else
//     {
//         console.log("Successfully inserted now closing the db connection");
//         mongoose.connection.close();
//     }
// });
export default {applicationSchema};

