import mongoose from "mongoose";

const connectDB = () =>{
    mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then( (data) =>{
        console.log(`db server connected: ${data.connection.host}`);
    }).catch((err) =>{console.log(`db not connected \n ${err}`)});
}


export default connectDB;
