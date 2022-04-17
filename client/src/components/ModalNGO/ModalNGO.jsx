import './ModalNGO.scss'
import Grid from "@mui/material/Grid";
import RequestItemsNGO from '../../components/ModalNGO/reqItemsNGO.jsx';
import { Typography } from '@mui/material';
import React, { useEffect,useState } from 'react';
import { List } from '@mui/material';
import image1 from '../../components/RequestItems/testImage.jpeg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from "react-router-dom";
import { findNgoUser,findNgoRest } from  '../../servicesApi/donation.js';

const theme = createTheme({
    typography: {
    fontFamily: [
        'Poppins',
        'Sans-Serif',
    ].join(','),
    color:'#264653',
    },});

var templist = [{
    image: image1,
    name:"Al Khair Foundation",
    pargaraph1:"A well known foundation that collects monetary, ration and meal donations",
    NGOrequests: true,
    // buttonStat:1

},
{
    image: image1,
    name:"Academy for Educational Developement",
    pargaraph1:"A well known foundation that collects monetary, ration and meal donations",
    NGOrequests: true,
    // buttonStat:1

},
{
    image: image1,
    name:"RNGB Foundation",
    pargaraph1:"A well known foundation that collects monetary, ration and meal donations",
    NGOrequests: true,
    // buttonStat:1

},
{
    image: image1,
    name:"Al Khair Foundation",
    pargaraph1:"A well known foundation that collects monetary, ration and meal donations",
    NGOrequests: true,
    // buttonStat:1

},
{
    image: image1,
    name:"Academy for Educational Developement",
    pargaraph1:"A well known foundation that collects monetary, ration and meal donations",
    NGOrequests: true,
    // buttonStat:1

},
{
    image: image1,
    name:"RNGB Foundation",
    pargaraph1:"A well known foundation that collects monetary, ration and meal donations",
    NGOrequests: true,
    // buttonStat:1

},
]

export default function ModalNGO(prop){
    let naviagte = useNavigate();
    const [ngo_lis, setNgoLis] = useState([]);
    const {onClick,state,handleClose,route} = prop;
    const getNgos = async() =>{
        let ngos = [];
        //let address = {"city": "karachi", "country": "Pakistan",  "streetNumber":"11",  "houseNumber":"1"}
        let role = "rest"; //get from local storage
        let id_user  = "62386a881d8d6e8aeabe6d6f"; // get from local storage
        

        if(role === "user")
        {
            try{
                console.log('hello');
                ngos = await findNgoUser(id_user);
            
                setNgoLis(ngos.data.body);
            
            }
            catch(err){
                console.log('error in calling api');
            }
        }
        else if (role === "rest"){
            try{
                console.log('hello');
                ngos = await findNgoRest(id_user);
            
                setNgoLis(ngos.data.body);
            
            }
            catch(err){
                console.log('error in calling api');
            }

        }
    }

    useEffect(()=>{
        getNgos();

    }, [])

    //const [open,setOpen] = React.useState(state);

    
    // function handleClose(reason)
    // {
    //     if (reason !== "backdropClick")
    //     {
    //     return 
    //     }
    //     setOpen(false);
    // }
    // function onClick()
    // {
    //     setOpen(false);
    //     naviagte(`/${route}`)

    // }
    return (
    <div>
    <Dialog fullScreen = {true} PaperProps={{ sx: { borderRadius: "10px", width: "90%", height: "auto" } }}
        open={state}
        aria-labelledby="responsive-dialog-title"
        onClose={handleClose}>
            <Grid container display="flex" alignItems={'center'} justifyContent="center">
    <Grid container alignItems={'center'} justifyContent="center">
    <Grid item display="flex">
    <Typography  sx={{ display: 'block',font: 'normal normal normal 24px/61px Poppins'}}
    component="span"
    variant="h6"
    color="#264653">
        {` Non-Governmental Organizations `}
    </Typography>
    </Grid>
    </Grid>
    <Grid container alignItems={'center'} justifyContent="center">
    <Grid item display={"flex"}>
    <Typography sx={{ display: 'block',font: 'normal normal normal 18px/61px Poppins'}}
    component="span"
    variant="h12"
    color="#264653">
    {"Find the NGOs you can donate to below"}
    </Typography>
    </Grid>
    </Grid>
    <Grid container display={"flex"} alignItems={'center'} justifyContent="center" sx={{paddingRight:'2%',paddingLeft:'2%'}}>
    <List sx={{width:'100%',height:'100%',overflow:'auto',maxHeight:"500px",'&::-webkit-scrollbar': {
    width: '0.5rem',
    },
    '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 6px rgba(231, 111, 81, 1)',
    webkitBoxShadow: 'inset 0 0 6px rgba(231, 111, 81, 1)'
    },
    '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#E76F51',
    borderRadius:'4px',
    outline: '1px solid slategrey'
    }}}>
    {ngo_lis.map(item =>(
        <RequestItemsNGO image={item.image} name={item.name} description={item.description}/>
    ))}
    </List>
    </Grid>
    </Grid>
    </Dialog>
    </div>
    );
}
