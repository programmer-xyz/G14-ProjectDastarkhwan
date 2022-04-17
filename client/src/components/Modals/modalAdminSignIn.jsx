import './modalAdminSignIn.scss'
import Grid from "@mui/material/Grid";
import { Typography } from '@mui/material';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from "react-router-dom";
import LoginForm from '../../components/Forms/formslogin';
import logo from './logo.jpeg';

const theme = createTheme({
    typography: {
    fontFamily: [
        'Poppins',
        'Sans-Serif',
    ].join(','),
    color:'#264653',
    },});

export default function AdminModalSignIn(props){
    let naviagte = useNavigate();
    const {modelMsg,state,modalImage,actionMsg,route,setUserType} = props;
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
        <Grid container display="flex" alignItems={'center'} justifyContent="center">
            <img className = "logoimg" src= {logo}/>
        </Grid>
        <p>&nbsp;</p>
        <Grid container alignItems={'center'} justifyContent="center">
        <Grid item display="flex">
        <ThemeProvider theme = {theme}>
        <Typography  sx={{ display: 'block'}}
        component="span"
        variant="h6"
        color="#E76F51">
            {` Welcome, please Sign In `}
        </Typography>
        </ThemeProvider>
        </Grid>
        </Grid>
        <p>&nbsp;</p>
        <Grid container display="flex" alignItems={'center'} justifyContent="center">
            <LoginForm setUserType={setUserType} user = {4} isAdmin={true}/>
        </Grid>
        <p>&nbsp;</p>
        <Grid container display="flex" alignItems={'center'} justifyContent="center">
            </Grid>
            <p>&nbsp;</p>
        </Dialog>
        </div>
    );
}
