import React from 'react';
import Dialog from '@mui/material/Dialog';
import  DialogContent  from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import DialogActions from '@mui/material/DialogActions';
import './Modals.scss';
import checkImg from "../../assets/check-circle.svg";
import alertImg from "../../assets/Icon ionic-ios-alert.svg"
import Button from '@mui/material/Button'
export default function Modals(prop)
{
  const {modelMsg,state,success,actionMsg,handleClose,onClick} = prop;

  
  
  // const Item = styled(Paper)(() => ({
  //   backgroundColor: '#ffff',

  // }));
 

  return (
    <div>
      <Dialog sx= {{borderRadius:"100px"}}
        open={state}
        aria-labelledby="responsive-dialog-title"
        onClose={handleClose}
        >
        <Grid container  justifyContent={'center'} alignItems="center" >
        <Grid item justifyContent={'center'} alignItems="center"  >
        <DialogContent  sx={{display:"flex",justifyContent:"center", alignItems:"center"}}>
           <img  src={success?checkImg:alertImg} alt="Success assest tick"/>
        </DialogContent>
        </Grid>
        <Grid item  justifyContent="center" alignItems="center">
        <DialogContent sx={{paddingTop:"0",paddingBottom:"0"}}>
          {modelMsg}
        </DialogContent>

        </Grid>
        <Grid container justifyContent="center" alignItems="center" >
        <Grid item justifyContent="center" alignItems="center">
          <DialogActions>
            
          <Button onClick={onClick} variant="contained" size="medium" disableRipple aria-label=""  sx={ 
                    {"&.MuiButtonBase-root:hover": {
                        bgcolor: "#264653"
                        },
                        marginTop:"20px",
                        marginBottom:"20px",
                        height:"10vh",
                        width:"20vw",
                        backgroundColor:"#264653",
                        textColor:"#fff",
                        color:"#fff",
                        textAlign:"center",
                        justifyContent:"center",
                        alignItems:"center",
                        font:"normal normal medium 16px/25px Poppins",
                        borderRadius:"8px"
                        
                        }} >
 
                {actionMsg}
                </Button>
          </DialogActions>
        </Grid>
        </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}