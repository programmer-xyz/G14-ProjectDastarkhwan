import './requestItems.css';
import testImage from './testImage.jpeg';
import {IoChevronForwardCircle}  from 'react-icons/io5';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import Avatar  from '@mui/material/Avatar';
import ListItemAvatar  from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import React from 'react';
import { Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button';

function RequestItems(props)
{
    if(props.NGOrequests)
    {
        return (
            <div>
                <ListItem sx={{width: '100%', border:'1px solid #422F5F21', borderRadius:"25px", backgroundColor:"rgba(244, 162, 97, 0.17)",marginBottom:"20px"}}>
                    <ListItemAvatar> 
                    <Avatar sx={{width:"80px", height:"80px", marginRight:"20px"}}src ={props.image} alt ="User Image"/>
                    {/* <img class= "image1" src={props.image} alt="here"/> */}
                    </ListItemAvatar>
                <ListItemText primary={props.name} secondary={
                    <React.Fragment>
                        <Typography  sx={{ display: 'block' }}
                            component="span"
                        variant="body2"
                        color="text.primary">
                            {`${props.heading1}:  `}
                        <Typography sx={{ display: 'inline' }}
                            component="span"
                        variant="paragraph"
                        color="text.primary">
                        {`${props.pargaraph1}`} 

                        </Typography>
                        </Typography> 
                        <Typography  sx={{ display: 'block' }}
                            component="span"
                        variant="body2"
                        color="text.primary">
                            {`${props.heading2}:  `}
                        <Typography sx={{ display: 'inline' }}
                            component="span"
                        variant="paragraph"
                        color="text.primary">
                        {`${props.date} | ${props.time}`} 

                        </Typography>
                        </Typography> 

                    </React.Fragment>
                    
                    
                }>
                </ListItemText>
                <Grid item display="flex" sx={{alignItems:"left",justifyContent:"flex-end"}}>
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
                <ListItemButton  disableRipple sx={{"&.MuiButtonBase-root:hover": {
                        bgcolor: "transparent"
            
                }}}>
                <IoChevronForwardCircle size={30} color="#E76F51"/>
                </ListItemButton>
                </Grid>

                </ListItem>
            </div>
            
            // <div class="container reqitem">
            //     <div class="row">
            //     <div class="col-lg-4 col-sm-12 firstC">
            //         <img class= "image1" src={props.image} alt="here"/>
            //     </div>
            //     <div class="col-lg-4 col-sm-12 secondC" >
            //         <h4 class="headings1">{props.name}</h4>
            //         <h5 class = "headings2">{props.heading1}:</h5>
            //         <p class="ptag1">{props.pargaraph1}</p>
            //         <h5 class="headings3">{props.heading2}:</h5>
            //         <p class="ptag">{props.date} | {props.time}</p>
            //     </div>
            //     <div class="col-lg-4 col-sm-12 thirdC">
            //         <button className="Accept">Accept</button>
            //         <button className="View-Details"><IoChevronForwardCircle size={40} color="#E76F51"/></button>
            //     </div>
            //     </div>
            // </div>
        )

    }
    else if (props.userRequests)
    {
        return (
            <div class="container useritem">
                <div class="row row1">
                <div class="col-lg-4 col-sm-12 firstC1">
                    <img class= "image1" src={props.image}/>
                </div>
                <div class="col-lg-4 col-sm-12 secondC1">
                    <h4 class={"headings11"+(props.Resreq && props.userRequests?' reqAccept':' userAccept')}>{props.name}</h4>
                    <h5 class = {"headings21"+(props.Resreq && props.userRequests?' reqAccept':' userAccept')}>{props.heading1}:</h5>
                    <p class="ptag12">{props.pargaraph1}</p>
                    <h5 class={"headings31"+(props.Resreq && props.userRequests?' reqAccept':' userAccept')}>{props.heading2}:</h5>
                    <p class="ptag11">{props.date} | {props.time}</p>
                </div>
                <div class="col-lg-4 col-sm-12 thirdC1">
                    {props.buttonStat === 0 && <button className="userbutton pending">Pending</button>}
                    {props.buttonStat === 1 && <button className="userbutton expired">Expired</button>}
                    {props.buttonStat === 2 && <button className="userbutton completed">Completed</button>}
                </div>
                </div>
            </div>
        )
    }
   
}

export default RequestItems;