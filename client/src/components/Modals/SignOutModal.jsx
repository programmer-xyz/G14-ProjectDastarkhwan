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
const {modelMsg,state,actionMsg,actionMsg2,route,handleClose,onClick,onClick2} = prop;
return (
<div>
    <Dialog PaperProps={{ sx: { width: "572px", height: "214px" } }}
    open={state}
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
        <button onClick={onClick} type = "submit" className="buttonsSignOut2">{actionMsg}</button>
        <button onClick={onClick2} type = "submit" className="buttonsSignOut" >{actionMsg2}</button>
        </DialogActions>
    </Grid>
    </Dialog>
</div>
);
}