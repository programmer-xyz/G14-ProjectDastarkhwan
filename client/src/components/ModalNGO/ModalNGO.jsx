import './ModalNGO.scss'
import Grid from "@mui/material/Grid";
import RequestItemsNGO from '../../components/ModalNGO/reqItemsNGO.jsx';
import { Typography } from '@mui/material';
import React from 'react';
import { List } from '@mui/material';
import image1 from '../../components/RequestItems/testImage.jpeg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from "react-router-dom";

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
    <Dialog fullScreen = {true} PaperProps={{ sx: { borderRadius: "10px", width: "90%", height: "auto" } }}
        open={open}
        aria-labelledby="responsive-dialog-title"
        onClose={handleClose}>
            <Grid container display="flex" alignItems={'center'} justifyContent="center">
    <Grid container alignItems={'center'} justifyContent="center">
    <Grid item display="flex">
    <ThemeProvider theme = {theme}>
    <Typography  sx={{ display: 'block'}}
    component="span"
    variant="h6"
    color="#264653">
        {` Non-Governmental Organizations `}
    </Typography>
    </ThemeProvider>
    </Grid>
    </Grid>
    <Grid container alignItems={'center'} justifyContent="center" >
    <Grid item display={"flex"}>
    <ThemeProvider theme = {theme}>
    <Typography sx={{ display: 'block' }}
    component="span"
    variant="h12"
    color="#264653">
    {"Find the NGOs you can donate to below"}
    </Typography>
    </ThemeProvider>
    </Grid>
    </Grid>
    <Grid container display={"flex"} alignItems={'center'} justifyContent="center">
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
    {templist.map(item =>(
        <RequestItemsNGO image={item.image} name={item.name} heading1={item.heading1} heading2={item.heading2} pargaraph1={item.pargaraph1} date={item.date} time={item.time} userRequests={false} NGOrequests={item.NGOrequests} Resreq={false} buttonStat={1}/>
    ))}
    </List>
    </Grid>
    </Grid>
    </Dialog>
    </div>
    );
}
