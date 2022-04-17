// import './modalAddress.scss';
// import Grid from "@mui/material/Grid";
// import { Typography } from '@mui/material';
// import React from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import Dialog from '@mui/material/Dialog';
// import { useNavigate } from "react-router-dom";

// const theme = createTheme({
//     typography: {
//     fontFamily: [
//         'Poppins',
//         'Sans-Serif',
//     ].join(','),
//     color:'#264653',
//     },});

// export default function modalAddress (prop) {
//     return (
//         <div>
//     <Dialog PaperProps={{ sx: { borderRadius: "10px", width: "auto", height: "auto",overflowX:"hidden"} }}
//         aria-labelledby="responsive-dialog-title">
//     <p>&nbsp;</p>
//     <Grid container alignItems={'center'} justifyContent="center">
//     <Grid item display="flex">
//     <ThemeProvider theme = {theme}>
//     <Typography  sx={{ display: 'block'}}
//     component="span"
//     variant="h6"
//     color="#E76F51">
//         {` Enter your Adress`}
//     </Typography>
//     </ThemeProvider>
//     </Grid>
//     </Grid>
//     <p>&nbsp;</p>
//     <Grid container display="flex" alignItems={'center'} justifyContent="center">
//     <div className ="form">
//     <form action="/">
//     <input type = "text" placeholder = "House No." />
//     <p>&nbsp;</p>
//     <input type = "text" placeholder = "St. Block"/>
//     <div class="form-group">
//                             <select class="form-select shadow-none"  placeholder="NGO" name="ngo"> 
//                                 <option selected>Select City</option>
//                                 <option>Lahore</option>
//                                 <option>Islamabad</option>
//                                 <option>Karachi</option>
//                             </select>
//                         </div>
//     <button className = "sign-in" type = "submit">Confirm Address</button>
//     </form>
//     </div>
//     </Grid>
//     <p>&nbsp;</p>
//     <Grid container display="flex" alignItems={'center'} justifyContent="center">
//         </Grid>
//         <p>&nbsp;</p>
//     </Dialog>
//     </div>
//     );
// }

import './modalAddress.scss'
import Grid from "@mui/material/Grid";
import { Typography } from '@mui/material';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from "react-router-dom";
import logo from './logo.jpeg';

const theme = createTheme({
    typography: {
    fontFamily: [
        'Poppins',
        'Sans-Serif',
    ].join(','),
    color:'#264653',
    },});

export default function ModalAddress(prop){
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
    <Dialog PaperProps={{ sx: { borderRadius: "10px", width: "90%", height: "auto",overflowX:"hidden"} }}
        open={open}
        aria-labelledby="responsive-dialog-title"
        onClose={handleClose}>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <Grid container alignItems={'center'} justifyContent="center">
    <Grid item display="flex">
    <ThemeProvider theme = {theme}>
    <Typography  sx={{ display: 'block'}}
    component="span"
    variant="h6"
    color="#E76F51">
        {` Enter your Address `}
    </Typography>
    </ThemeProvider>
    </Grid>
    </Grid>
    <p>&nbsp;</p>
    <Grid container display="flex" alignItems={'center'} justifyContent="center">
    <div className ="form">
        <form action="/">
        <div class="form-group">
            <input type="text" class="form-control shadow-none" placeholder="House No."/>
        </div>
        <div class="form-group">
            <input type="text" class="form-control shadow-none" placeholder="St. Block"/>
        </div>
        <div class="form-group">
            <select class="form-select shadow-none"  placeholder="NGO" name="ngo"> 
                <option selected>Select City</option>
                <option>Lahore</option>
                <option>Islamabad</option>
                <option>Karachi</option>
            </select>
        </div>
        <div class="form-group">
            <select class="form-select shadow-none"  placeholder="NGO" name="ngo"> 
                <option selected>Pakistan</option>
            </select>
        </div>
        <p>&nbsp;</p>
        <button className = "sign-in" type = "submit">Confirm Address</button>
        </form>
        </div>
    </Grid>
    <p>&nbsp;</p>
    <Grid container display="flex" alignItems={'center'} justifyContent="center">
        </Grid>
        <p>&nbsp;</p>
    </Dialog>
    </div>
    );
}
