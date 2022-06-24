import { handleAsyncErr } from "./handleAsyncErr";


export const isAdmin = handleAsyncErr(async (req,res,next)=>
{
    let isAllowed = res.role === 'Admin';
    if(isAllowed)
    {
        next()
    }
    else
    {
        res.status(401).json({
            success: false,
            message: "You don't have the required permission",

        
          });
    }

});
export const isNgo = handleAsyncErr(async (req,res,next)=>
{
    let isAllowed = res.role === 'Ngo';
    if(isAllowed)
    {
        next()
    }
    else
    {
        res.status(401).json({
            success: false,
            message: "You don't have the required permission",

        
          });
    }

});
export const isUser = handleAsyncErr(async (req,res,next)=>
{
    let isAllowed = res.role === 'User';
    if(isAllowed)
    {
        next()
    }
    else
    {
        res.status(401).json({
            success: false,
            message: "You don't have the required permission",

        
          });
    }

});
export const isRest = handleAsyncErr(async (req,res,next)=>
{
    let isAllowed = res.role === 'Rest';
    if(isAllowed)
    {
        next()
    }
    else
    {
        res.status(401).json({
            success: false,
            message: "You don't have the required permission",

        
          });
    }

});