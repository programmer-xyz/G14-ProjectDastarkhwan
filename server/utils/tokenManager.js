import jwt from "jsonwebtoken";
import config from "../config/config";

export const tokenMaker = (user, Code, res) =>{
    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
        expiresIn: config.JWT_EXPIRE,
      });
      //conv to ms
    let life_date = new Date(Date.now() + config.JWT_EXPIRE*1000)
    const cond = {
        httpOnly: true,
       expires: life_date
    }
    
      res.status(Code).cookie("token", token, cond).json({
          success: true,
          user,
          token,
 
        });
    
    
}


