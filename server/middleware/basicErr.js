import HandErr from "../utils/err";

const basicErr = (error, req, res, callFunc) =>{
    !error.statusCode ? error.statusCode = 500 : error.statusCode = error.statusCode;
    !error.message ? error.message = "err from basic err file" : error.message = error.message;
    
}

export default basicErr;