import React from 'react';
import Dialog from '@mui/material/Dialog';
import  DialogContent  from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import DialogActions from '@mui/material/DialogActions';
import './Modals.scss';
import { useNavigate } from "react-router-dom";
export default function Modals(prop)
{
  let naviagte = useNavigate();
  const {modelMsg,state,modalImage,actionMsg,route} = prop;
  const [open,setOpen] = React.useState(state);

  
  function handleClose(reason)
  {
    if (reason !== "backdropClick")
    {
      return 
    }
    setOpen(false);
  }
  // const Item = styled(Paper)(() => ({
  //   backgroundColor: '#ffff',

  // }));
  function onClick()
  {
    setOpen(false);
    naviagte(`/${route}`)

  }

  return (
    <div>
      <Dialog sx= {{borderRadius:"100px"}}
        open={open}
        aria-labelledby="responsive-dialog-title"
        onClose={handleClose}
        >
        <Grid conatiner justifyContent={'center'} alignItem="center" >
        <Grid item justifyContent={'center'} alignItem="center"  >
        <DialogContent  sx={{display:"flex",justifyContent:"center", alignItem:"center"}}>
           <img  src={modalImage} alt="Success assest tick"/>
        </DialogContent>
        </Grid>
        <Grid item  justifyContent="center" alignItems="center">
        <DialogContent sx={{paddingTop:"0",paddingBottom:"0"}}>
          {modelMsg}
        </DialogContent>
        </Grid>
        <Grid item  >
          <DialogActions>
          <button onClick={onClick} type = "submit" className="buttons1" >{actionMsg}</button>
          </DialogActions>
        </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}