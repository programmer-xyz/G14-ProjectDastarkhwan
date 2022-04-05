import cron from 'node-cron'

export const rejectApplication = ()=>
{
    cron.schedule('* * * * *', function(){
        console.log("task running ever min");
    })
}