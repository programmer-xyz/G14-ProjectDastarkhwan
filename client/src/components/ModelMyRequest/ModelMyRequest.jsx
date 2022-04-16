import React from 'react';
import Dialog from '@mui/material/Dialog';
import  DialogContent  from '@mui/material/DialogContent';
import Grid from '@mui/material/Grid';
import DialogActions from '@mui/material/DialogActions';
import './ModelMyRequest.scss';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";
import RequestItem from "../RequestItems/requestItems.jsx"
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import image1 from '../../components/RequestItems/testImage.jpeg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
// {/* <RequestItems image={image1} name={"Abdul Muizz khan"} heading1={"Type"} heading2={"Date"} pargaraph1={"Meal Donations"} date={"7/03/4"} time={"10:47 am"} userRequests={true} NGOrequests={false} Resreq={true} buttonStat={0}/>} */}
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
export default function Modals(prop)
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
            <RequestItem image={item.image} name={item.name} heading1={item.heading1} heading2={item.heading2} pargaraph1={item.pargaraph1} date={item.date} time={item.time} userRequests={true} NGOrequests={false} buttonStat={1}/>
        ))}
        </List>
        </Grid>
      </Dialog>
    </div>
  );
}