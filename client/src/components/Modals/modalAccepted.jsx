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
import {useState,useEffect} from 'react';
import { viewReqNgo, viewReqNgoRes,viewReqNgoUser} from '../../servicesApi/ngoAcceptpage';
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
];

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

export default function ModalAccepted(prop)
{
    let naviagte = useNavigate();
    const {modelMsg,state,modalImage,actionMsg,route} = prop;
    const [open,setOpen] = useState(state);
    const [allReqList,setAllReqList] = useState([]);
    const [filteredReq,setfilterReq] = useState([]);
    const [selectedID,setID] = useState(1);

    const AllrequestsNgo = async (selectedID) =>{
        try{
            if(selectedID === 1)
            {
                let email = "ngo2@gmail.com";
                var listOfngos = await viewReqNgo(email);
                console.log(listOfngos.data.body);
                var List1 = []
                for (var i =0;i<listOfngos.data.body.length;i++)
                {
                    if(listOfngos.data.body[i].donatedByRestaurant)
                    {
                        List1.push(listOfngos.data.body[i].donatedByRestaurant);
                    }
                    else if (listOfngos.data.body[i].donatedByUser)
                    {
                        List1.push(listOfngos.data.body[i].donatedByUser)
                    }

                }
                console.log("This is list1",List1);
                setfilterReq(List1);
            }
            else if (selectedID === 2)
            {
                console.log("here where selected id is 2");
                let email = "ngo2@gmail.com";
                var listofRes = await viewReqNgoRes(email);
                console.log("This is the list of res",listofRes.data.body);
                setfilterReq(listofRes.data.body);

            }
            else if (selectedID === 3)
            {
                let email = "ngo2@gmail.com";
                var listofUser = await viewReqNgoUser(email);
                console.log("This is the list of user ",listofUser.data.body);
                setfilterReq(listofUser.data.body);

            }
        }catch(err){
            console.log(err)
            naviagte("/");
        } 
    }
    function GetSelectedID (id)
    {

        AllrequestsNgo(id+1);

        
    }

    useEffect(()=>{
        AllrequestsNgo(selectedID);
        // checkNgosandRes(allReqList);
      },[])


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
    <TabBar itemOne = {"All"} itemTwo = {"Restuarant"} itemThree = {"User"} getId={GetSelectedID}/>
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
        {filteredReq.map(item =>(
            <RequestItem image={item.image} name={item.name} heading1={"Type"} heading2={"Date"} pargaraph1={item.pargaraph1} date={item.date} time={item.time} userRequests={true} NGOrequests={false} buttonStat={3}/>
        ))}
        </List>
        </Grid>
    </Dialog>
    </div>
    );
}