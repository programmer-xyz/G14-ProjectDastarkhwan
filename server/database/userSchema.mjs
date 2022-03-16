
import mongoose from "mongoose";
import addressSchema from "./addressSchema.mjs";
const {Schema} = mongoose
import dotenv from "dotenv";
dotenv.config({debug:true,path:"./../.env"});

mongoose.connect(process.env.DB_HOST,{useNewUrlParser:true});

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

const user = mongoose.model("user",userSchema);

// let addressOne = {
//     city:"Lahore",
//     country:"Pakistan",
//     streetNumber:"14 st",
//     houseNumber:"512 F2"
// }
// console.log(addressOne);

// const userOne = new user({
//     name:"Abdul Muizz khan",
//     userName:"hello12",
//     password:"mazaydar",
//     email:"muizz41@gmail.com",
//     createdAt:Date.now(),
//     isActive:true,
//     lastUpdated:Date.now(),
//     address:addressOne,
//     cnic:"35202-4561070-5",
//     phoneNumber:"0304-4923899",
//     bio:"very cool person",
//     mealDonated:1,
//     amountDonated:1000,
//     rationDonated:1,
// });

// userOne.save((err)=>{
//     if(err)
//     {
//         console.log("error encountered while saving");
//     }
//     else
//     {
//         console.log("Successfully seeded");
//         mongoose.connection.close();
//     }

// });

export default {userSchema};