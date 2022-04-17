import './modalAddress.scss'
import Grid from "@mui/material/Grid";
import { Typography } from '@mui/material';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const theme = createTheme({
    typography: {
    fontFamily: [
        'Poppins',
        'Sans-Serif',
    ].join(','),
    color:'#264653',
    },});
const Address = {
        houseNo:"",
        street:"",
        city:"",
        country:""
    }
const Address2 = {
    houseNo:"",
    street:"",
    city:"",
    country:""
}
const Address3 = {
    houseNo:"",
    street:"",
    city:"",
    country:""
}


export default function ModalAddress(prop){

    const {handleClose,state,onClick3,User} = prop;
    const [address,setAddress] = useState(Address);
    const [address1,setAddress1] = useState(Address2);
    const [address2,setAddress2] = useState(Address3);

    const handleForm4 = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        console.log("This is the value",value);
        setAddress({...address, [name]: value});

    }
    const handleForm5 = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        console.log("This is the value",value);
        setAddress1({...address1, [name]: value});

    }
    const handleForm6 = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        console.log("This is the value",value);
        setAddress2({...address2, [name]: value});

    }
    function onClick(e)
    {
        e.preventDefault();
        onClick3(address)

    }
    function onClick1(e)
    {
        e.preventDefault();
        onClick3(address1)

    }
    function onClick2(e)
    {
        e.preventDefault();
        onClick3(address2)

    }
    if(User === 1)
    {
        return (
            <div>
            <Dialog PaperProps={{ sx: {borderRadius: "10px", width: "90%", height: "auto",overflowX:"hidden"} }}
                open={state}
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
                    <input type="text" class="form-control input4 shadow-none" placeholder="House No." value ={address.houseNo} name="houseNo" onChange={handleForm4}/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control input4 shadow-none" placeholder="St. Block" value ={address.street} name = "street" onChange={handleForm4}/>
                </div>
                <div class="form-group">
                    <select class="form-select input4 shadow-none" value ={address.city} onChange={handleForm4} placeholder="City" name="city"> 
                        <option selected>Select City</option>
                        <option>Lahore</option>
                        <option>Islamabad</option>
                        <option>Karachi</option>
                    </select>
                </div>
                <div class="form-group">
                    <select class="form-select input4 shadow-none" placeholder="Country" name="country" value ={address.country} onChange={handleForm4} > 
                        <option selected>Select Country</option>
                        <option>Pakistan</option>
        
                    </select>
                </div>
                <p>&nbsp;</p>
                <button onClick = {onClick} className = "sign-in" >Confirm Address</button>
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
    else if (User===2)
    {
        return (
            <div>
            <Dialog PaperProps={{ sx: {borderRadius: "10px", width: "90%", height: "auto",overflowX:"hidden"} }}
                open={state}
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
                    <input type="text" class="form-control input4 shadow-none" placeholder="House No." value ={address1.houseNo} name="houseNo" onChange={handleForm5}/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control input4 shadow-none" placeholder="St. Block" value ={address1.street} name = "street" onChange={handleForm5}/>
                </div>
                <div class="form-group">
                    <select class="form-select input4 shadow-none" value ={address1.city} onChange={handleForm5} placeholder="City" name="city"> 
                        <option selected>Select City</option>
                        <option>Lahore</option>
                        <option>Islamabad</option>
                        <option>Karachi</option>
                    </select>
                </div>
                <div class="form-group">
                    <select class="form-select input4 shadow-none" placeholder="Country" name="country" value ={address1.country} onChange={handleForm5} > 
                        <option selected>Select Country</option>
                        <option>Pakistan</option>
        
                    </select>
                </div>
                <p>&nbsp;</p>
                <button onClick = {onClick1} className = "sign-in" >Confirm Address</button>
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
    else if (User === 3)
    {
        return (
            <div>
            <Dialog PaperProps={{ sx: {borderRadius: "10px", width: "90%", height: "auto",overflowX:"hidden"} }}
                open={state}
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
                    <input type="text" class="form-control input4 shadow-none" placeholder="House No." value ={address2.houseNo} name="houseNo" onChange={handleForm6}/>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control input4 shadow-none" placeholder="St. Block" value ={address2.street} name = "street" onChange={handleForm6}/>
                </div>
                <div class="form-group">
                    <select class="form-select input4 shadow-none" value ={address2.city} onChange={handleForm6} placeholder="City" name="city"> 
                        <option selected>Select City</option>
                        <option>Lahore</option>
                        <option>Islamabad</option>
                        <option>Karachi</option>
                    </select>
                </div>
                <div class="form-group">
                    <select class="form-select input4 shadow-none" placeholder="Country" name="country" value ={address2.country} onChange={handleForm6} > 
                        <option selected>Select Country</option>
                        <option>Pakistan</option>
        
                    </select>
                </div>
                <p>&nbsp;</p>
                <button onClick = {onClick2} className = "sign-in" >Confirm Address</button>
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
    
}
