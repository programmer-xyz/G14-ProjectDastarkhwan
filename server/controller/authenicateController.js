import Admin from "../models/admin";


//test func 
const createAdmin = async (req,res) =>{
    const {userName, password} = req.body;
    console.log(userName)
    //const admin2 = await admin.create(req.body);
    //console.log(admin2)
    res.status(201).json({
        success:true
    })
    const ad = new Admin({userName, password});
    ad.save().then(() =>{
        console.log('RO made')
    }).catch(err => console.log(`ro not made \n ${err}`))
}



export default createAdmin;