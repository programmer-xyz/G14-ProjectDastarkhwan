import React from 'react';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import './modalAccepted.scss';
import { useNavigate } from "react-router-dom";
import RequestItem from "../RequestItems/requestItems.jsx"
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import image1 from '../../components/RequestItems/testImage.jpeg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TabBar from '../../components/TabBar/TabBar.jsx';
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

}
]
export default function ModalAccepted(prop)
{
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
<Dialog fullScreen = {true} PaperProps={{ sx: { borderRadius: "10px", width: "60%", height: "auto" } }}
    open={open}
    aria-labelledby="responsive-dialog-title"
    onClose={handleClose}
    >
    <p>&nbsp;</p>
    <Grid container alignItems={'center'} justifyContent="center">
<Grid item display="flex">
<ThemeProvider theme = {theme}>
<Typography  sx={{ display: 'block'}}
component="span"
variant="h6"
color="#264653">
    {` My Requests `}
</Typography>
</ThemeProvider>
</Grid>
</Grid>
<Grid container  justifyContent={'center'} alignItems="center" >
    <Grid item display="flex">
<ThemeProvider theme = {theme}>
<Typography  sx={{ display: 'block'}}
component="span"
variant="h6"
color="#264653">
    {` Find requests placed by you below `}
</Typography>
</ThemeProvider>
</Grid>
<p>&nbsp;</p>
<Grid container justifyContent={'center'} alignItems="center"> 
<Grid>
<TabBar itemOne = {"All"} itemTwo = {"Restuarant"} itemThree = {"User"}/>
</Grid>
</Grid>
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
        <RequestItem image={item.image} name={item.name} heading1={item.heading1} heading2={item.heading2} pargaraph1={item.pargaraph1} date={item.date} time={item.time} userRequests={true} NGOrequests={false} buttonStat={3}/>
    ))}
    </List>
    </Grid>
</Dialog>
</div>
);
}