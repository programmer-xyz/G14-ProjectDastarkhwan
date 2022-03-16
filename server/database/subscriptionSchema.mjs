import mongoose from "mongoose";
const {Schema} = mongoose;
import dotenv from "dotenv";

dotenv.config({debug:true,path:"./../.env"});

mongoose.connect(process.env.DB_HOST,{useNewUrlParser:true});

const subscriptionSchema = new mongoose.Schema({
    amount:{type:Number,required:true},
    typeOfSub:{type:String,required:true},
    donor:[{type:Schema.Types.ObjectId,ref:'User',required:true}],
    ngoId:{type:Schema.Types.ObjectId,ref:'Ngo',required:true}

});

const subscription = mongoose.model("subscription",subscriptionSchema);

// const subscriptionOne = new subscription({
//     amount:500,
//     typeOfSub:"Basic",
//     donor:['6231b87f553cceae2b149f35'],
//     ngoId:'6231bffdb458bc574a965886'
// });
// subscriptionOne.save((err)=>{
//     if(err)
//     {
//         console.log("Could not subscribe");
//     }
//     else
//     {
//         mongoose.connection.close();
//     }
// });
export default {subscriptionSchema};


