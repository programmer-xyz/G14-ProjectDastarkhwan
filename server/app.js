import express from "express";
import bodyParser from 'body-parser';
import admin from "./routes/adminRoutes";
import midErr from "./middleware/basicErr";

const app = express();

// // Init an Express App. 
// // Use your dependencies here
// // use all controllers(APIs) here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//admin
app.use("/api/v1", admin);


///middleware err
app.use(midErr);

export default app;