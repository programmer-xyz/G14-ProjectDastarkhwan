import './modelResD.scss';
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
import CloseIcon from '@mui/icons-material/Close';


function ResturantDetailModal(props)
{
  let naviagte = useNavigate();
  const {state,onClick,handleClose} = props;


  
 
  // function onClick()
  // {
  //   setOpen(false);
  //   naviagte(`/${route}`)

  // }

  return (
    <div>
      <Dialog fullScreen={true} PaperProps={{ sx: { width: "718px", height: "620px",borderRadius:'10px'} }}
        open={state}
        aria-labelledby="responsive-dialog-title"
        onClose={handleClose}
        >
        <DialogTitle sx = {{textAlign:'center',font: 'normal normal normal 24px/35px Poppins',color:'#E76F51'}}>Restuarant Details
        <Box display="flex" justifyContent={'right'} sx ={{position:'relative',top:'-35px'}}>
        <button onClick = {onClick} className="buttonClass1"> <IoIosCloseCircle size={30} color="#F4A261"/></button>
        </Box>
        </DialogTitle>
        <Grid container justifyContent={'center'} alignItems="center" direction="row" >
        <Grid container item xs={6} justifyContent={'left'} alignItems="left" sx={{marginTop:'-5%'}} >
        <DialogContent>
        <React.Fragment>
            <Typography sx = {{display:'flex',paddingBottom:"2%",font:'normal normal normal 24px/35px Poppins'}} component="span" variant="h6" color={"#E76F51"}>
                {'Monal Resturant'} 
            </Typography>
            <Typography  sx={{ display: 'flex',paddingBottom:"2%",font: 'normal normal 300 16px/25px Poppins'}}
                component="span"
                variant="body2"
                color="#E76F51">
                {'Email :  '}
            <Typography sx={{ display: 'flex',font: 'normal normal 300 15px/25px Poppins'}}
                component="span"
            variant="paragraph"
            color="#264653">
            {`${props.email}`} 
            </Typography>
            </Typography> 
            <Typography  sx={{ display: 'flex',paddingBottom:"2%",font: 'normal normal 300 16px/25px Poppins'}}
                component="span"
            variant="body2"
            color="#E76F51">
                {/* {`${props.heading1}:  `} */}
                {'Phone : '}
            <Typography sx={{ display: 'flex',font: 'normal normal 300 15px/25px Poppins'}}
                component="span"
            variant="paragraph"
            color="#264653">
            {` ${props.phoneNumber}`} 
            </Typography>
            </Typography> 
            <Typography  sx={{ display: 'flex',paddingBottom:"2%",font: 'normal normal 300 16px/25px Poppins'}}
                component="span"
            variant="body2"
            color="#E76F51">
                {/* {`${props.heading1}:  `} */}
                {'Address: '}
            <Typography sx={{ display: 'flex',font: 'normal normal 300 15px/25px Poppins'}}
                component="span"
            variant="paragraph"
            color="#264653">
            {` ${props.address}`} 
            </Typography>
            </Typography> 
            <Typography  sx={{ display: 'flex',paddingBottom:"2%",font: 'normal normal 300 16px/25px Poppins'}}
                component="span"
            variant="body2"
            color="#E76F51">
                {/* {`${props.heading1}:  `} */}
                {'Account No: '}
            <Typography sx={{ display: 'flex',font: 'normal normal 300 15px/25px Poppins'}}
                component="span"
            variant="paragraph"
            color="#264653">
            {` ${props.accountNumber} `} 
            </Typography>
            </Typography> 
            <Typography sx = {{display:'flex',paddingTop:'2%',font: 'normal normal 300 16px/25px Poppins'}} component="span" variannt="h5" color="#E76F51">
            {'Description: '}
            </Typography>
            <Typography sx = {{display:'flex',paddingTop:'2%',font: 'normal normal 300 14px/21px Poppins'}} component="span" variannt="paragraph" color="#264653">
            {` ${props.description}`}
            </Typography>
            <Typography sx = {{display:'flex',paddingTop:'2%',font: 'normal normal 300 16px/25px Poppins'}} component="span" variannt="h5" color="#E76F51">
            {'Point of Contact info: '}
            </Typography>
            <Typography sx = {{display:'flex',paddingTop:'2%',font:'normal normal 300 16px/25px Poppins'}} component="span" variannt="h5" color="#264653">
            {` ${props.pointOfCName}`}
            </Typography>
            <Typography sx = {{display:'flex',paddingTop:'2%',font:'normal normal 300 16px/25px Poppins'}} component="span" variannt="h5" color="#264653">
            {` ${props.pointOfCEmail}`}
            </Typography>
            <Typography sx = {{display:'flex',paddingTop:'2%',font:'normal normal 300 16px/25px Poppins'}} component="span" variannt="h5" color="#264653">
            {` ${props.pointOfCNumber}`}
            </Typography>
        </React.Fragment>     
        </DialogContent>
        </Grid>
        <Grid container item xs={6} sx ={{width:'100%',height:'100%',overflowY:'hidden'}} justifyContent={'right'} alignContent={'right'}>
        <DialogContent alignContent={'right'} justifyContent={'right'}>
        <DialogActions sx ={{position:'relative',top:'90%'}}>
        <Button variant="outlined" size="medium" disableRipple aria-label=""  sx={ 
                    {"&.MuiButtonBase-root:hover": {
                        bgcolor: "#fff",
                        borderColor:'#E76F51',
                        },
                        textColor:"#E76F51",
                        color:"#E76F51",
                        textAlign:"center",
                        justifyContent:"center",
                        alignItems:"center",
                        borderRadius:"30px",
                        borderColor:'#E76F51',
                        marginRight:"20px"
                        
                        }} >
                <CloseIcon size={25} sx = {{mr:"2"}}></CloseIcon>
                Reject
        </Button>
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

export default ResturantDetailModal;