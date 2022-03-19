import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
const app = express();

// // Init an Express App. 
// // Use your dependencies here
// // use all controllers(APIs) here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
   res.status(200).json({
      status: "Server Run successfully"
   });
});


export default app;