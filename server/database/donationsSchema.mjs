import mongoose from "mongoose";
const {Schema} = mongoose;

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

const donation = mongoose.model("Donation",donationSchema);


export default donation;