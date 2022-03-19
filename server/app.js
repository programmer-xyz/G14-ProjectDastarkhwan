import express from "express";
import bodyParser from 'body-parser';
import admin from "./routes/adminRoutes";

const app = express();

// // Init an Express App. 
// // Use your dependencies here
// // use all controllers(APIs) here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//admin
app.use("/api/v1", admin);

export default app;