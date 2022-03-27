import mongoose from "mongoose";
import config from "./config";

const connectDB = () =>{
    mongoose.connect(config.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then( (data) =>{
        console.log(`db server connected: ${data.connection.host}`);
    }).catch((err) =>{console.log(`db not connected \n ${err}`)});
}


export default connectDB;
