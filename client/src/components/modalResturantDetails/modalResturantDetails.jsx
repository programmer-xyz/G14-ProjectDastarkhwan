import './modalResturantDetails.scss';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";
import React from 'react';
import Dialog from '@mui/material/Dialog';
import  DialogContent  from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import monalImage from '../../assets/gernal-view-of-the-outdoor.jpg';
import { IoIosCloseCircle } from "react-icons/io";


function ResModals(props)
{
  let naviagte = useNavigate();
  const {modelMsg,state,modalImage,actionMsg,route} = props;
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
      <Dialog fullScreen={true} PaperProps={{ sx: { width: "650px", height: "550px",borderRadius:'10px'} }}
        open={open}
        aria-labelledby="responsive-dialog-title"
        onClose={handleClose}
        >
        <DialogTitle sx = {{textAlign:'center',font: 'normal normal normal 24px/35px Poppins',color:'#E76F51'}}>Request Details
        <Box display="flex" justifyContent={'right'} sx ={{position:'relative',top:'-35px'}}>
        <button className="buttonClass1"> <IoIosCloseCircle size={30} color="#F4A261"/></button>
        </Box>
        </DialogTitle>
        <Grid container justifyContent={'center'} alignItems="center" direction="row" >
        <Grid container item xs={6} justifyContent={'left'} alignItems="left"  >
        <DialogContent>
        <React.Fragment>
            <Typography sx = {{display:'flex',paddingBottom:"10px",font:'normal normal normal 24px/35px Poppins',color:'#E76F51'}} component="span" variant="h6">
                {'Monal Resturant'}
            </Typography>
            <Typography  sx={{ display: 'flex',paddingBottom:"10px",font: 'normal normal 300 16px/25px Poppins'}}
                component="span"
            variant="body2"
            color="#E76F51">
                {'Type: '}
            <Typography sx={{ display: 'flex',font:'normal normal normal 15px/25px Poppins'}}
                component="span"
            variant="paragraph"
            color="#264653">
            {` ${props.donationType}`} 
            </Typography>
            </Typography> 
            <Typography  sx={{ display: 'flex',font: 'normal normal 300 16px/25px Poppins'}}
                component="span"
            variant="body2"
            color="#E76F51">
                {'Date: '}
            <Typography sx={{ display: 'flex',font:'normal normal 300 16px/25px Poppins'}}
                component="span"
            variant="paragraph"
            color="#264653">
            {`${props.date} | ${props.time}`} 
            </Typography>
            </Typography> 
            <Typography sx = {{display:'flex',paddingTop:'20px',font:'normal normal 300 16px/27px Poppins'}} component="span" variannt="h5" color="#264653">
            {'104 Lincoln St SE Mapleton, Minnesota(MN), 56065'}
            </Typography>
            <Typography sx = {{display:'flex',paddingTop:'20px',font: 'normal normal normal 18px/25px Poppins',color:'#E76F51'}} component="span" variannt="h5" color="#264653">
            {'Description: '}
            </Typography>
            <Typography sx = {{display:'flex',paddingTop:'20px',font: 'normal normal 300 14px/21px Poppins'}} component="span" variannt="paragraph" color="#264653">
            {`${props.description}`}
            </Typography>
        </React.Fragment>     
        </DialogContent>
        </Grid>
        <Grid container item xs={6} sx ={{width:'100%',height:'100%',overflowY:'hidden'}} justifyContent={'right'} alignContent={'right'}>
        <DialogContent alignContent={'right'} justifyContent={'right'}>
        <React.Fragment>
            <img className = "imageProp" src = {monalImage} alt="Resturant Image"/>
        </React.Fragment>   
        <DialogActions sx ={{position:'relative',top:'35%'}}>
        <Button className='butClass' variant="contained" size="medium" disableRipple aria-label=""  sx={ 
                    {"&.MuiButtonBase-root:hover": {
                        bgcolor: "#E76F51",
                        boxShadow:"none"
                        },
                        backgroundColor:"#E76F51",
                        textColor:"#fff",
                        color:"#fff",
                        textAlign:"center",
                        justifyContent:"center",
                        alignItems:"center",
                        fontSize:"15px",
                        borderRadius:"30px",
                        boxShadow:"none"
                        
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