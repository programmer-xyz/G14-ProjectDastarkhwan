import jwt from "jsonwebtoken";
import config from "../config/config";

export const tokenMaker = (user, role,res) =>{
    const token = jwt.sign({ id: user._id , role: role}, config.JWT_SECRET, {
        expiresIn: config.JWT_EXPIRE,
      });
      //conv to ms
    const cond = {
        httpOnly: false,
        maxAge: 60 *60 *24 *7,
        secure:false
        
        
    }
    
     res.cookie("token", token, );
     res.status(200).send({
      success: true,
      message:"User logged In",
      user

    });
    
    
}


