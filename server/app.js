import express from "express";
import bodyParser from 'body-parser';
import admin from "./routes/adminRoutes";
import midErr from "./middleware/basicErr";
import ngo from "./routes/ngoRoutes";
import rest from "./routes/restRoutes";
import user from "./routes/userRoutes"
import cookieParser from "cookie-parser";

const app = express();

// // Init an Express App. 
// // Use your dependencies here
// // use all controllers(APIs) here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//admin
app.use("/api/v1", admin);
app.use("/api/v1", ngo);
app.use("/api/v1", user);
app.use("/api/v1", rest);
///middleware err this must always be at the end 
app.use(midErr);

export default app;