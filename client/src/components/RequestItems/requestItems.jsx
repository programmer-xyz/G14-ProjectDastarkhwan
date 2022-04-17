import './requestItems.css';
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
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
    fontFamily: [
        'Poppins',
        'Sans-Serif',
    ].join(','),
    ListItemText: {
        fontFamily: [
            'Poppins',
            'Sans-Serif',].join(',')
    },
    Button: {
        fontFamily: [
            'Poppins',
            'Sans-Serif',].join(',')
    },
    color:'#264653',
    },});

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
                    <ThemeProvider theme = {theme}>
                    <ListItemText primary={props.name} secondary={
                    <React.Fragment>
                        <ThemeProvider theme = {theme}>
                        <Typography  sx={{ display: 'block' }}
                        component="span"
                        variant="body2"
                        color="#264653">
                            {`${props.heading1}:  `}
                        <Typography sx={{ display: 'inline' }}
                        component="span"
                        variant="paragraph"
                        color="#264653">
                        {`${props.pargaraph1}`} 
                        </Typography>
                        </Typography> 
                        <Typography  sx={{ display: 'block' }}
                        component="span"
                        variant="body2"
                        color="#264653">
                            {`${props.heading2}:  `}
                        <Typography sx={{ display: 'inline' }}
                        component="span"
                        variant="paragraph"
                        color="#264653">
                        {`${props.date} | ${props.time}`} 
                        </Typography>
                        </Typography>
                        </ThemeProvider>
                    </React.Fragment>
                }>
                </ListItemText>
                    </ThemeProvider>
                <Grid item display="flex" sx={{alignItems:"left",justifyContent:"flex-end"}}>
                <ThemeProvider theme = {theme}>
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
                </ThemeProvider>
                <ListItemButton  disableRipple sx={{"&.MuiButtonBase-root:hover": {
                        bgcolor: "transparent"
                }}}>
                <IoChevronForwardCircle size={30} color="#E76F51"/>
                </ListItemButton>
                </Grid>
                </ListItem>
            </div>
        )
    }
    else if (props.userRequests)
    {
        return (
            <div>
                <ListItem sx={{width: '100%', border:'1px solid #422F5F21', borderRadius:"25px", backgroundColor:"#fff",marginBottom:"20px"}}>
                    <ListItemAvatar> 
                    <Avatar sx={{width:"80px", height:"80px", marginRight:"20px"}}src ={props.image} alt ="User Image"/>
                    </ListItemAvatar>
                    <ThemeProvider theme = {theme}>
                    <ListItemText primary={props.name} secondary={
                    <React.Fragment>
                        <ThemeProvider theme = {theme}>
                        <Typography  sx={{ display: 'block' }}
                        component="span"
                        variant="body2"
                        color="#264653">
                            {`${props.heading1}:  `}
                        <Typography sx={{ display: 'inline' }}
                        component="span"
                        variant="paragraph"
                        color="#264653">
                        {`${props.pargaraph1}`} 
                        </Typography>
                        </Typography> 
                        <Typography  sx={{ display: 'block' }}
                        component="span"
                        variant="body2"
                        color="#264653">
                            {`${props.heading2}:  `}
                        <Typography sx={{ display: 'inline' }}
                        component="span"
                        variant="paragraph"
                        color="#264653">
                        {`${props.date} | ${props.time}`} 
                        </Typography>
                        </Typography>
                        </ThemeProvider>
                    </React.Fragment>
                }>
                </ListItemText>
                    </ThemeProvider>
                <Grid item display="flex" sx={{alignItems:"left",justifyContent:"flex-end"}}>
                <ThemeProvider theme = {theme}>
                {props.buttonStat === 0 && <Button className='butClass2' variant="contained" size="medium" disableRipple aria-label=""  sx={ 
                    {"&.MuiButtonBase-root:hover": {
                        bgcolor: "rgba(253, 236, 223, 1)"
                        },
                        backgroundColor:"#FDECDF",
                        textColor:"#fff",
                        color:"#E76F51",
                        textAlign:"center",
                        justifyContent:"center",
                        alignItems:"center",
                        fontSize:"14/25px",
                        borderRadius:"25px",
                        width: "218px",
                        height: "50px"
                        }} >
                Pending
                </Button>}
                {props.buttonStat === 1 && <Button className='butClass2' variant="contained" size="medium" disableRipple aria-label=""  sx={ 
                    {"&.MuiButtonBase-root:hover": {
                        bgcolor: "rgba(160, 160, 160, 0.4)"
                        },
                        backgroundColor:"rgba(160, 160, 160, 0.2)",
                        textColor:"#fff",
                        color:"#474747",
                        textAlign:"center",
                        justifyContent:"center",
                        alignItems:"center",
                        fontSize:"14/25px",
                        borderRadius:"25px",
                        width: "218px",
                        height: "50px"
                        }} >
                Expired
                </Button>}
                {props.buttonStat === 2 && <Button className='butClass2' variant="contained" size="medium" disableRipple aria-label=""  sx={ 
                    {"&.MuiButtonBase-root:hover": {
                        bgcolor: "rgba(42, 157, 143, 0.4)"
                        },
                        backgroundColor:"rgba(42, 157, 143, 0.2)",
                        textColor:"#fff",
                        color:"#2A9D8F",
                        textAlign:"center",
                        justifyContent:"center",
                        alignItems:"center",
                        fontSize:"14/25px",
                        borderRadius:"25px",
                        width: "218px",
                        height: "50px"
                        }} >
                Completed
                </Button>}
                {props.buttonStat === 3 && <Button className='butClass2' variant="contained" size="medium" disableRipple aria-label=""  sx={ 
                    {"&.MuiButtonBase-root:hover": {
                        bgcolor: "rgba(42, 157, 143, 0.4)"
                        },
                        backgroundColor:"rgba(42, 157, 143, 0.2)",
                        textColor:"#fff",
                        color:"#2A9D8F",
                        textAlign:"center",
                        justifyContent:"center",
                        alignItems:"center",
                        fontSize:"14/25px",
                        borderRadius:"25px",
                        width: "218px",
                        height: "50px"
                        }} >
                Accepted
                </Button>}
                {props.buttonStat === 4 && <Button className='butClass2' variant="contained" size="medium" disableRipple aria-label=""  sx={ 
                    {"&.MuiButtonBase-root:hover": {
                        bgcolor: "rgba(42, 157, 143, 0.4)"
                        },
                        backgroundColor:"#E76F51",
                        textColor:"#fff",
                        color:"#fff",
                        textAlign:"center",
                        justifyContent:"center",
                        alignItems:"center",
                        fontSize:"14/25px",
                        borderRadius:"25px",
                        width: "218px",
                        height: "50px"
                        }} >
                Rejected
                </Button>}
                </ThemeProvider>
                </Grid>
                </ListItem>
    </div>
        )
    }
}

export default RequestItems;