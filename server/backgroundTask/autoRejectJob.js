import cron from 'node-cron'
import application from "../models/applicationSchema.mjs";
export const rejectApplication = ()=>
{
    cron.schedule('* * * * *', async function(){
        console.log("here")
        const response = await application.updateMany(
            {"createdAt": {
            $gte: new Date((new Date().getTime() - (3 * 24 * 60 * 60 * 1000))),
            $lt: new Date((new Date().getTime() - (2 * 24 * 60 * 60 * 1000)))
          },
        "approvalStatus": "inProgress"},
        {
            $set: { approvalStatus:"rejected"}
        }
    )
     
        console.log(response);
    })
}