import './modelNGOdetails.scss';
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
import { IoIosCloseCircle } from "react-icons/io";
import CloseIcon from '@mui/icons-material/Close';
import taxImage from "../../assets/exampletaximage.png";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Fontpoppins from './modelNGOdetails.scss';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'Sans-Serif',
      ].join(','),
    },});



function NgoModals(props)
{
  let naviagte = useNavigate();
  const {handleClose,state,onclick} = props;
    console.log(props.details);

  
  // function handleClose(reason)
  // {
  //   if (reason !== "backdropClick")
  //   {
  //     return 
  //   }
  //   setOpen(false);
  // }
  // function onClick()
  // {
  //   setOpen(false);
  //   naviagte(`/${route}`)

  // }

  return (
    <div>
      <Dialog fullScreen={true} PaperProps={{ sx: { width: "850px", height: "730px",borderRadius:'10px' }}}
        open={state}
        aria-labelledby="responsive-dialog-title"
        onClose={handleClose}
        >
        <DialogTitle sx = {{textAlign:'center','font':Fontpoppins.myFont,color:'#E76F51'}}> NGO Details
        <Box display="flex" justifyContent={'right'} sx ={{position:'relative',top:'-35px',paddingBottom:"0px"}}>
        <button onClick={onclick}className="buttonClass1"> <IoIosCloseCircle size={30} color="#F4A261"/></button>
        </Box>
        </DialogTitle>
        <Grid container justifyContent={'center'} alignItems="center" direction="row" >
        <Grid container item xs={6} justifyContent={'left'} alignItems="left"  sx={{marginTop:'-15%'}}>
        <DialogContent>
        <React.Fragment>
            <Typography sx = {{display:'flex',paddingBottom:"2%",font:'normal normal normal 24px/35px Poppins'}} component="span" variant="h6" color={"#E76F51"}>
                {props.details.name} 
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
            {`${props.details.email}`} 
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
            {` ${props.details.phoneNumber}`} 
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
            {` ${JSON.stringify(props.details.address)}`} 
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
            {` ${props.details.bankAccount} `} 
            </Typography>
            </Typography> 
            <Typography sx = {{display:'flex',paddingTop:'2%',font: 'normal normal 300 16px/25px Poppins'}} component="span" variannt="h5" color="#E76F51">
            {'Description: '}
            </Typography>
            <Typography sx = {{display:'flex',paddingTop:'2%',font: 'normal normal 300 14px/21px Poppins'}} component="span" variannt="paragraph" color="#264653">
            {` ${props.details.description}`}
            </Typography>
            <Typography sx = {{display:'flex',paddingTop:'2%',font: 'normal normal 300 16px/25px Poppins'}} component="span" variannt="h5" color="#E76F51">
            {'Point of Contact info: '}
            </Typography>
            <Typography sx = {{display:'flex',paddingTop:'2%',font:'normal normal 300 16px/25px Poppins'}} component="span" variannt="h5" color="#264653">
            {` ${props.details.contactName}`}
            </Typography>
            <Typography sx = {{display:'flex',paddingTop:'2%',font:'normal normal 300 16px/25px Poppins'}} component="span" variannt="h5" color="#264653">
            {` ${props.details.contactEmail}`}
            </Typography>
            <Typography sx = {{display:'flex',paddingTop:'2%',font:'normal normal 300 16px/25px Poppins'}} component="span" variannt="h5" color="#264653">
            {` ${props.details.contactNumber}`}
            </Typography>
        </React.Fragment>     
        </DialogContent>
        </Grid>
        <Grid container item xs={6} sx ={{width:'100%',height:'100%',overflowY:'hidden'}} justifyContent={'right'} alignContent={'right'}>
        <DialogContent alignContent={'right'} justifyContent={'right'}>
        <img className = "imageProp" src = {`data:image/jpeg;base64,$${props?.details?.registerationDoc}`} alt={'ngo certificate unavaiable'}/>
        <DialogActions sx ={{position:'relative',top:'180px'}}>
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
                <Button variant="contained" size="medium" disableRipple sx={ 
                    {"&.MuiButtonBase-root:hover": {
                        bgcolor: "#E76F51",
                        boxShadow:'none',
                        border:'none'

                        },
                        backgroundColor:"#E76F51",
                        color:"#fff",
                        textAlign:"center",
                        justifyContent:"center",
                        alignItems:"center",
                        font:"normal normal medium 14px/21px Poppins",
                        borderRadius:"30px",
                        boxShadow:'none'
                        
                        }}>
                <CheckIcon size={25} sx={{mr:"2"}}></CheckIcon>
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

export default NgoModals;