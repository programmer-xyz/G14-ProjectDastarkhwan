import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({debug:true,path:"./../.env"});

mongoose.connect(process.env.DB_HOST,{useNewUrlParser:true});


const addressSchema = new mongoose.Schema({
    city:{type:String,requried:true},
    country:{type:String,required:true},
    streetNumber:{type:String,required:true},
    houseNumber:{type:String,required:true}
});
const address = mongoose.model("address",addressSchema);

// const addressOne = new address({
//     city:"Lahore",
//     country:"Pakistan",
//     streetNumber:"14 st",
//     houseNumber:"512 F2"
// });

// addressOne.save((err)=>{
//     if(err)
//     {
//         console.log("error");
//     }
//     else
//     {
//         console.log("Added to the address table");
//         mongoose.connection.close();
//     }
// });

export default {addressSchema};