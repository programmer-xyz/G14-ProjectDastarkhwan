import express from "express";
import bodyParser from 'body-parser';
// Init an Express App. 
const app = express();
// Use your dependencies here
// use all controllers(APIs) here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
   res.status(200).json({
      status: "Server Run successfully"
   });
});
// Start Server here
app.listen(8080, () => {
   console.log("Server is running on port 8080!");
});