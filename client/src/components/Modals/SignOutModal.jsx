import React from 'react';
import Dialog from '@mui/material/Dialog';
import  DialogContent  from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import DialogActions from '@mui/material/DialogActions';
import './SignOutModal.scss';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

export default function SignOutModals(prop)
{
let naviagte = useNavigate();
const {modelMsg,state,modalImage,actionMsg,actionMsg2,route} = prop;
const [open,setOpen] = React.useState(state);
function handleClose(reason)
{
if (reason !== "backdropClick")
{
    return 
}
setOpen(false);
}
function onClick()
{
setOpen(false);
naviagte(`/${route}`)
}
return (
<div>
    <Dialog PaperProps={{ sx: { width: "572px", height: "214px" } }}
    open={open}
    aria-labelledby="responsive-dialog-title"
    onClose={handleClose}
    >
    <Grid item justifyContent={'center'} alignItems="center" >
    <DialogContent  sx={{display:"flex",justifyContent:"center", alignItems:"center", font : "normal normal normal 24px/35px Poppins"}}>
        {modelMsg}
    </DialogContent>
    </Grid>
    <Grid item>
        <DialogActions sx = {{justifyContent:"center", alignItems:"center",}}>
        <button onClick={onClick} type = "submit" className="buttonsSignOut2" >{actionMsg}</button>
        <button onClick={onClick} type = "submit" className="buttonsSignOut" >{actionMsg2}</button>
        </DialogActions>
    </Grid>
    </Dialog>
</div>
);
}