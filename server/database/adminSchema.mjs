import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({debug:true,path:"./../.env"});

mongoose.connect(process.env.DB_HOST,{useNewUrlParser:true});

const adminSchema = new mongoose.Schema({
    userName:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});

const admin = mongoose.model("Admin",adminSchema);

// const adminPD = new admin({
//     userName:"admin",
//     password:"admin"
// });

// adminPD.save((err)=>{
//     if(err)
//     {
//         console.log("Error while inserting into the admin table");
//     }
//     {
//         console.log("Successfully inserted into the table");
//         mongoose.connection.close();
//     }
// });


export default {adminSchema};