import jwt from "jsonwebtoken";

export const tokenMaker = (user, Code, res ) =>{
    const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
        expiresIn: process.env.JWT_EXPIRE,
      });
      //conv to ms
    let life_date = new Date(Date.now() + process.env.JWT_EXPIRE*24 *60 *60 *1000)
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