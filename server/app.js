import express from "express";
import bodyParser from 'body-parser';
import midErr from "./middleware/basicErr";
import central from "./routes/centralRoutes";
import cookieParser from "cookie-parser";
import cors from 'cors'

//import multer from 'multer';
// var form = multer()

import { rejectApplication } from "./backgroundTask/autoRejectJob";
const app = express();

// // Init an Express App. 
// // Use your dependencies here
// // use all controllers(APIs) here
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(form.array());
// app.use(express.static('public'))
app.use(cookieParser());
app.use(cors(
    {
        credentials:true,
        origin:"http://localhost:3000",
    }
));

//admin

// app.use("/api/v1/admin", admin);
// app.use("/api/v1/ngo", ngo);
// app.use("/api/v1/user", user);
// app.use("/api/v1/rest", rest);
// app.use("/api/v1/", auth);
app.use("/api/v1",central)
///middleware err this must always be at the end 
app.use(midErr);

//background task called
//rejectApplication();

export default app;