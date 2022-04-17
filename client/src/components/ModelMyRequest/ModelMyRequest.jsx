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
import {useState,useEffect} from 'react';
import { myRequests } from '../../servicesApi/DashboardResturant';
import { myRequestsUser } from '../../servicesApi/DashboardUser';
// {/* <RequestItems image={image1} name={"Abdul Muizz khan"} heading1={"Type"} heading2={"Date"} pargaraph1={"Meal Donations"} date={"7/03/4"} time={"10:47 am"} userRequests={true} NGOrequests={false} Resreq={true} buttonStat={0}/>} */}
const theme = createTheme({
  typography: {
  fontFamily: [
      'Poppins',
      'Sans-Serif',
  ].join(','),
  color:'#264653',
  },});

function getDate(date)
{
  let today = new Date(date);
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  let finalDate = dd + '/' + mm + '/' + yyyy;
  return finalDate;
}

function returnTime (date)
{
  let today = new Date(date);
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let finalTime = hours + ":" +minutes;
  return finalTime;
}

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
export default function Modalsmyrequest(props)
{
  let naviagte = useNavigate();
  const {modelMsg,state,modalImage,actionMsg,route} = props;
  const [open,setOpen] = React.useState(state);
  const [myReq,setMyReq] = useState([]);

  const getMyrequestsRes = async () =>{

    if(props.User === 1)
    {
      let email = "rest4@gmail.com";
      myRequests(email).then((response)=>{
        console.log("The data is :",response.data.body)
        setMyReq(response.data.body)
      }).catch((err)=>{
        console.log(err);
      });
    }
    else {
      let email1 = "amgio@lums.edu.pk";
      myRequestsUser(email1).then((response)=>{
        console.log("The data is :",response.data.body)
        setMyReq(response.data.body)
      }).catch((err)=>{
        console.log(err);
      });
    }
   


  }
  useEffect(()=>{
    getMyrequestsRes();
  },[])

  function getStatus(isActive,isCompleted)
  {
    if(isCompleted)
    {
      return 2;
    }
    else if (isActive)
    {
      return 0;
    }
    else
    {
      return 1;
    }
  }
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
  if(props.User === 1)
  {
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
          {myReq.map(item =>(
              <RequestItem image={item.acceptedBy.image} name={item.acceptedBy.name} heading1={"Type"} heading2={"Date"} pargaraph1={`${item.typeOfDonation} donation`} date={getDate(item.createdAt)} time={returnTime(item.createdAt)} userRequests={true} NGOrequests={false} buttonStat={getStatus(item.isActive,item.donationComplete)}/>
          ))}
          </List>
          </Grid>
        </Dialog>
      </div>
    );
  }
  else 
  {
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
          {myReq.map(item =>(
              <RequestItem image={item.acceptedBy.image} name={item.acceptedBy.name} heading1={"Type"} heading2={"Date"} pargaraph1={`${item.typeOfDonation} donation`} date={getDate(item.createdAt)} time={returnTime(item.createdAt)} userRequests={true} NGOrequests={false} buttonStat={getStatus(item.isActive,item.donationComplete)}/>
          ))}
          </List>
          </Grid>
        </Dialog>
      </div>
    );
  }
  
}