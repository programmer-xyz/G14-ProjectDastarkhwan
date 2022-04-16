import './modalResturantDetails.scss';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";
import React from 'react';
import Dialog from '@mui/material/Dialog';
import  DialogContent  from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import monalImage from '../../assets/gernal-view-of-the-outdoor.jpg';


function ResModals(prop)
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
  function onClick()
  {
    setOpen(false);
    naviagte(`/${route}`)

  }

  return (
    <div>
      <Dialog fullWidth={true} PaperProps={{ sx: { width: "759px", height: "539px" } }}
        open={open}
        aria-labelledby="responsive-dialog-title"
        onClose={handleClose}
        >
        <DialogTitle sx = {{textAlign:'center'}}>Request Details</DialogTitle>
        <Grid container justifyContent={'center'} alignItems="center" direction="row" >
        <Grid container item xs={6} justifyContent={'left'} alignItems="left"  >
        <DialogContent>
        <React.Fragment>
            <Typography sx = {{display:'flex',paddingBottom:"10px"}} component="span" variant="h6">
                {'Monal Resturant'}
            </Typography>
            <Typography  sx={{ display: 'flex',paddingBottom:"10px"}}
                component="span"
            variant="body2"
            color="text.primary">
                {/* {`${props.heading1}:  `} */}
                {'Type: '}
            <Typography sx={{ display: 'flex' }}
                component="span"
            variant="paragraph"
            color="text.primary">
            {'Meals Donations'} 
            </Typography>
            </Typography> 
            <Typography  sx={{ display: 'flex' }}
                component="span"
            variant="body2"
            color="text.primary">
                {'Date: '}
            <Typography sx={{ display: 'flex' }}
                component="span"
            variant="paragraph"
            color="text.primary">
            {"7/03/22 | 2:54am"} 
            </Typography>
            </Typography> 
            <Typography sx = {{display:'flex',paddingTop:'20px'}} component="span" variannt="h5" color="text.primary">
            {'104 Lincoln St SE Mapleton, Minnesota(MN), 56065'}
            </Typography>
            <Typography sx = {{display:'flex',paddingTop:'20px'}} component="span" variannt="h5" color="text.primary">
            {'Description: '}
            </Typography>
            <Typography sx = {{display:'flex',paddingTop:'20px'}} component="span" variannt="paragraph" color="text.primary">
            {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            </Typography>
        </React.Fragment>     
        </DialogContent>
        </Grid>
        <Grid container item xs={6} sx ={{width:'100%',height:'100%',overflowY:'hidden'}} justifyContent={'right'} alignContent={'right'}>
        <DialogContent alignContent={'right'} justifyContent={'right'}>
        <React.Fragment>
            <img className = "imageProp" src = {monalImage}/>
        </React.Fragment>   
        <DialogActions sx ={{position:'relative',top:'150px'}}>
        <Button className='butClass' variant="contained" size="medium" disableRipple aria-label=""  sx={ 
                    {"&.MuiButtonBase-root:hover": {
                        bgcolor: "#E76F51"
                        },
                        backgroundColor:"#E76F51",
                        textColor:"#fff",
                        color:"#fff",
                        textAlign:"center",
                        justifyContent:"center",
                        alignItems:"center",
                        fontSize:"10px",
                        borderRadius:"30px"
                        
                        }} >
                <CheckIcon sx={{mr:"2"}}></CheckIcon>   
                Accept
                </Button>
        </DialogActions>  
        </DialogContent>
        </Grid>
        </Grid>
      </Dialog>
    </div>
  );
}

export default ResModals;