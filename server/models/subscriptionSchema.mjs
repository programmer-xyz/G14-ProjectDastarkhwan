import mongoose from "mongoose";
const {Schema} = mongoose;

const subscriptionSchema = new mongoose.Schema({
    amount:{type:Number,required:true},
    typeOfSub:{type:String,required:true},
    donor:[{type:Schema.Types.ObjectId,ref:'User',required:true}],
    ngoId:{type:Schema.Types.ObjectId,ref:'Ngo',required:true}

});

const subscription = mongoose.model("subscription",subscriptionSchema);

export default subscription;


