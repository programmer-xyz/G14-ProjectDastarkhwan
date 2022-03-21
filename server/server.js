import app from "./app";
import dotenv from "dotenv";
import connectDB from "./config/db";

//configure env file
dotenv.config({path : "../server/config/config.env"});
connectDB();

app.listen(process.env.PORT, () =>{
    console.log(`server is running at port ${process.env.PORT}`)
});
