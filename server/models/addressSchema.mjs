
import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    city:{type:String,requried:true},
    country:{type:String,required:true},
    streetNumber:{type:String,required:true},
    houseNumber:{type:String,required:true}
});
//const address = mongoose.model("Address",addressSchema);


//export default address;
export default addressSchema;