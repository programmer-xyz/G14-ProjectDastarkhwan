import './ngoacceptpage.scss'
import Grid from "@mui/material/Grid";
import RequestItems from '../../components/RequestItems/requestItems.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import TabBar from '../../components/TabBar/TabBar.jsx';
import { Typography } from '@mui/material';
import React from 'react';
import { List } from '@mui/material';
import image1 from '../../components/RequestItems/testImage.jpeg';
import font from './ngoacceptpage.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
    name:"Abdul Muizz khan",
    heading1:"Type",
    heading2:"Date",
    pargaraph1:"Meal donations",
    date:"7/03/04",
    time:"10:47am",
    NGOrequests: true,
    buttonStat:1

},
{
    image: image1,
    name:"Abdul Muizz khan",
    heading1:"Type",
    heading2:"Date",
    pargaraph1:"Meal donations",
    date:"7/03/04",
    time:"10:47am",
    NGOrequests: true,
    buttonStat:1

},
{
    image: image1,
    name:"Abdul Muizz khan",
    heading1:"Type",
    heading2:"Date",
    pargaraph1:"Meal donations",
    date:"7/03/04",
    time:"10:47am",
    NGOrequests: true,
    buttonStat:1

},
{
    image: image1,
    name:"Abdul Muizz khan",
    heading1:"Type",
    heading2:"Date",
    pargaraph1:"Meal donations",
    date:"7/03/04",
    time:"10:47am",
    NGOrequests: true,
    buttonStat:1

},
{
    image: image1,
    name:"Abdul Muizz khan",
    heading1:"Type",
    heading2:"Date",
    pargaraph1:"Meal donations",
    date:"7/03/04",
    time:"10:47am",
    NGOrequests: true,
    buttonStat:1

},
{
    image: image1,
    name:"Abdul Muizz khan",
    heading1:"Type",
    heading2:"Date",
    pargaraph1:"Meal donations",
    date:"7/03/04",
    time:"10:47am",
    NGOrequests: true,
    buttonStat:1

},
{
    image: image1,
    name:"Abdul Muizz khan",
    heading1:"Type",
    heading2:"Date",
    pargaraph1:"Meal donations",
    date:"7/03/04",
    time:"10:47am",
    NGOrequests: true,
    buttonStat:1

}]

function NGOacceptpage(){
    return (
    <div className="yello">
         <Navbar/>
    <Grid container display="flex" alignItems={'center'} justifyContent="center">
    <Grid container alignItems={'center'} justifyContent="center">
    <Grid item display="flex">
    <ThemeProvider theme = {theme}>
    <Typography  sx={{ display: 'block'}}
    component="span"
    variant="h3"
    color="#264653">
        {` Requests `}
    </Typography>
    </ThemeProvider>
    </Grid>
    </Grid>
    <Grid container alignItems={'center'} justifyContent="center" >
    <Grid item display={"flex"}>
    <ThemeProvider theme = {theme}>
    <Typography sx={{ display: 'block' }}
    component="span"
    variant="h6"
    color="#264653">
    {"Filter requests using the tabs below"} 
    </Typography>
    </ThemeProvider>
    </Grid>
    </Grid>
    <Grid item>
       <TabBar itemOne = {"All"} itemTwo = {"Restuarants"} itemThree = {"Users"}/>
    </Grid>
    <Grid container display={"flex"} alignItems={'center'} justifyContent="center">
    <List sx={{width:'75%',height:'100%',overflow:'auto',maxHeight:"500px",'&::-webkit-scrollbar': {
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
            <RequestItems image={item.image} name={item.name} heading1={item.heading1} heading2={item.heading2} pargaraph1={item.pargaraph1} date={item.date} time={item.time} userRequests={false} NGOrequests={item.NGOrequests} Resreq={false} buttonStat={1}/>
    ))}
    </List>


    </Grid>

    </Grid>
    </div>
    );
}

export default NGOacceptpage;
