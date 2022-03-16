import mongoose from "mongoose";
const {Schema} = mongoose;
import dotenv from "dotenv";

dotenv.config({debug:true,path:"./../.env"});

mongoose.connect(process.env.DB_HOST,{useNewUrlParser:true});


const donationSchema = new mongoose.Schema({
    donatedByUser:{type:Schema.Types.ObjectId,'ref':'user'},
    donatedByRestaurant:{type:Schema.Types.ObjectId,'ref':'restuarant'},
    acceptedBy:{type:Schema.Types.ObjectId,'ref':'ngo'},
    typeOfDonation:{type:String,required:true},
    donataionComplete:{type:Boolean,default:false},
    amount:{type:Number,required:true},
    description:{type:String,default:null},
    image:{type:Buffer,default:null},
    isActive:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now},
    subscriptionId:{type:Schema.Types.ObjectId,'ref':'subscription'}
});

const donation = mongoose.model("donation",donationSchema);

// const donationOne = new donation({
//     donatedBy:"6231b87f553cceae2b149f35",
//     acceptedBy:"6231bffdb458bc574a965886",
//     typeOfDonation:"Monetary",
//     donataionComplete:true,
//     amount:1000,
//     isActive:true,
//     createdAt:Date.now(),
//     subscriptionId:"6231c108a51648a46d8e3960"
// });

// donationOne.save((err)=>{
//     if(err)
//     {
//         console.log("Error came up while inserting into donationOne");
//     }
//     else
//     {
//         mongoose.connection.close();
//     }
// });

export default {donationSchema};