import app from "./app.js";
import connectDB from "./config/db.js";
import config from "./config/config.js";

//configure env file
//dotenv.config({path : "/Users/emaanmujahid/Desktop/G14-ProjectDastarkhwan/server/config/config.env"});
// dotenv.config({path : "../server/config/config.env"});
console.log(`NODE_ENV=${config.NODE_ENV}`)

connectDB();

app.listen(config.PORT, () =>{
    console.log(`server is running at port ${config.PORT}`)
});
