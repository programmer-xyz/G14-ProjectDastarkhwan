
import mongoose from "mongoose";
import adminSchema from "adminSchema.js"
//This is the connection string that will be used to create our db on our local machine later we can connect with the cluster

mongoose.connect("mongodb://localhost:27017/Project-Dastarkhwaan-DB",{useNewUrlParser:true}) 


//making the 

const adminSchema = new mongoose.Schema({
    _id:{type:Number,required:true,unique:true},
    userName:{type:String,required:true,unique:true},
    password:{type:String,required:true}
});

const admin = mongoose.model("Admin",adminSchema);

const adminPD = new admin({
    _id:1,
    userName:"admin",
    password:"admin"
});


const addressSchema = new mongoose.Schema({
    city:{type:String,requried:true},
    country:{type:String,required:true},
    streetNumber:{type:String,required:true},
    houseNumber:{type:String,required:true}
});

const resturantSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    address:{type:addressSchema,required:true},
    isActive:{type:Boolean,default:false},
    createdAt:{type:Date, default:Date.now},
    lastUpdatedAt:{type:Date,default:Date.now},
    password:{type:String,required:true},
    bio:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    contactEmail:{type:String,required:true},
    contactName:{type:String,required:true},
    contactNumber:{type:String,required:true},
    mealsDonated:{type:Number,required:true},
    donations:[{type:Schema.Types.ObjectId, ref:'Donation'}],
    applicationId:{type:Schema.Types.ObjectId,ref:'Application'},
    image:{type:Buffer,default:null},
    descriptionOfImage:{type:String,required:true}

});

const userSchema = new mongoose.Schema({
    userId:{type:Number,required:true,unique:true},
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
    name:{type:String,required:true},
    bankAccount:{type:String,default:null},
    mealDonated:{type:Number,required:true},
    amountDonated:{type:Number,required:true},
    rationDonated:{type:Number,required:true},
    donations:[{type:Schema.Types.ObjectId, ref:'Donation'}],
    image:{type:Buffer,default:null},
    descriptionOfImage:{type:String,required:true}

});

const subscriptionSchema = new mongoose.Schema({
    _id:{type:Number,required:true,unique:true},
    amount:{type:Number,required:true},
    typeOfSub:{type:String,required:true},
    donor:[{type:Schema.Types.ObjectId,ref:'User',required:true}],
    ngoId:{type:Schema.Types.ObjectId,ref:'Ngo',required:true}

});

const donationSchema = new mongoose.Schema({
    donationId:{type:Number,required:true,unique:true},
    donatedBy:{type:Schema.Types.ObjectId,'ref':['User','restaurant'],required:true},
    acceptedBy:{type:Schema.Types.ObjectId,'ref':'Ngo',required:true},
    typeOfDonation:{type:String,required:true},
    donataionComplete:{type:Boolean,default:false},
    amount:{type:Number,default:null,required:true},
    description:{type:String,required:true},
    image:{type:Buffer,default:null},
    isActive:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now},
    subscriptionId:{type:Schema.Types.ObjectId,'ref':'subscription'}
});

const applicationSchema = new mongoose.Schema({
    name:{type:String,required:true},
    userName:{type:String,required:true},
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

const ngoSchema = new mongoose.Schema({
    name:{type:String,required:true},
    userName:{type:String,required:true},
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
    mealsAccepted:{type:Number,required:true},
    monetaryFundsAccepted:{type:Number,required:true},
    rationAccepted:{type:Number,required:true},
    donationAccepted:[{type:Schema.Types.ObjectId,ref:'donation'}],
    applicationId:{type:Schema.Types.ObjectId,ref:'Application'},
    subscriptionList:[{type:Schema.Types.ObjectId,ref:'subscription'}],
    image:{type:Buffer,default:null}

});