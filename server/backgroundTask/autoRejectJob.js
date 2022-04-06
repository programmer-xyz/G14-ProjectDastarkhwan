import cron from 'node-cron'
import application from "../models/applicationSchema.mjs";

/* this is a node-corn job  that is currently ping every sec for testing purpose has 
to be changed to every day/3 hours depending on what time decide optimal time to check
for this background task  
*/
export const rejectApplication = ()=>
{
    /* automated rjection of application if number of days for application is greater or equal to 3 days */
    cron.schedule('* * * * *', async function(){
        console.log("here")
        const response = await application.updateMany(
            {"createdAt": {
            $lte: new Date((new Date().getTime() - (3 * 24 * 60 * 60 * 1000))),
            // $lt: new Date((new Date().getTime() - (2 * 24 * 60 * 60 * 1000)))
          },
        "approvalStatus": "inProgress"},
        {
            $set: { approvalStatus:"rejected"}
        }
    )
     
        console.log(response);
    })
}