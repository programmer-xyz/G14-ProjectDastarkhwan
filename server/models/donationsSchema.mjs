import mongoose from "mongoose";
const {Schema} = mongoose;
import addressSchema from "./addressSchema.mjs";

const donationSchema = new mongoose.Schema({
    donatedByUser:{type:Schema.Types.ObjectId,'ref':'user',default:null},
    donatedByRestaurant:{type:Schema.Types.ObjectId,'ref':'restuarant',default:null},
    acceptedBy:{type:Schema.Types.ObjectId,'ref':'NGO'},
    typeOfDonation:{type:String,required:true},
    donataionComplete:{type:Boolean,default:false},
    amount:{type:Number,required:true},
    description:{type:String,default:null},
    image:{type:Buffer,default:null},
    isActive:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now},
    subscriptionId:{type:Schema.Types.ObjectId,'ref':'subscription'},
    address:{type:addressSchema}
});

const donation = mongoose.model("Donation",donationSchema);


export default donation;