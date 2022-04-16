import './reqItemsNGO.css';
import {IoChevronForwardCircle}  from 'react-icons/io5';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import Avatar  from '@mui/material/Avatar';
import ListItemAvatar  from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import React from 'react';
import { Typography } from '@mui/material';
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

function RequestItemsNGO(props)
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
                <Button className='butClass2' variant="contained" size="medium" disableRipple aria-label=""  sx={ 
                    {"&.MuiButtonBase-root:hover": {
                        bgcolor: "#264653"
                        },
                        backgroundColor:"#264653",
                        textColor:"#fff",
                        color:"#fff",
                        textAlign:"center",
                        justifyContent:"center",
                        alignItems:"center",
                        fontSize:"10px",
                        borderRadius:"10px",
                        width: "218px",
                        height: "50px"
                        }} >
                Donate Now
                </Button>
                </ThemeProvider>
                </Grid>
                </ListItem>
    </div>
    )
}

export default RequestItemsNGO;