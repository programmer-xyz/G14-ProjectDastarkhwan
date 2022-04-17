import './ngoacceptpage.scss'
import Grid from "@mui/material/Grid";
import RequestItems from '../../components/RequestItems/requestItems.jsx';
import TabBar from '../../components/TabBar/TabBar.jsx';
import { Typography } from '@mui/material';
import React from 'react';
import { List } from '@mui/material';
import image1 from '../../components/RequestItems/testImage.jpeg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from '../../components/Navbar/Navbar';
import {useState,useEffect} from 'react';
import { makeRequestNgo,makeRequestNgoUser,makeRequestRestNgo } from '../../servicesApi/ngoAcceptpage';
import { useNavigate } from 'react-router-dom';


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
    name:"Abdul Muizz Khan",
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
    name:"Abdul Muizz Khan",
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
    name:"Abdul Muizz Khan",
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
    name:"Abdul Muizz Khan",
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
    name:"Abdul Muizz Khan",
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
    name:"Abdul Muizz Khan",
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
    name:"Abdul Muizz Khan",
    heading1:"Type",
    heading2:"Date",
    pargaraph1:"Meal donations",
    date:"7/03/04",
    time:"10:47am",
    NGOrequests: true,
    buttonStat:1

}]

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

function getName(item)

{
    if(!!item.userDetails)
    {
        if (item.userDetails.length!==0)
        {
            console.log(item.userDetails[0])
            return item.userDetails[0].name;
        }
    }
    else if (!!item.restDetails)
    {
        if (item.restDetails.length!==0)
        {
            console.log(item.restDetails[0].name);
            return item.restDetails[0].name;
        }
    }
     
}

function NGOacceptpage(props){

    let naviagte = useNavigate();
    const [selectedID,getSelectedID] = useState(1);
    const [ngorequests,setNgoRequests] = useState([]);

    const Ngorequests = async (selectedID) =>{
        try{
            if(selectedID === 1)
            {
                let ngoId = "624fe8304dfc24854bd62ad8";
                var listOfngos = await makeRequestNgo(ngoId);
                console.log("This is the response",listOfngos.data)
                var List1 = listOfngos.data.data;
                console.log("This is list1",List1);
                setNgoRequests(List1);
            }
            else if (selectedID === 2)
            {
                console.log("here where selected id is 2");
                let ngoId = "624fe8304dfc24854bd62ad8";
                var listofRes = await makeRequestRestNgo(ngoId);
                console.log("This is the response 2 ",listofRes.data);
                var list2 = listofRes.data.data;
                setNgoRequests(list2);

            }
            else if (selectedID === 3)
            {
                let ngoId = "624fe8304dfc24854bd62ad8";
                var listofUser = await makeRequestNgoUser(ngoId);
                console.log("This is the response 3 ",listofUser.data);
                var list3 = listofUser.data.data;
                setNgoRequests(list3);

            }
        }catch(err){
            console.log(err)
            setNgoRequests([]);
        } 
    }
    function GetSelectedID (id)
    {
        Ngorequests(id+1);

    }
    useEffect(()=>{
        Ngorequests(selectedID);
    },[])
        return (
            <div className="yello">
            <Grid sx ={{marginBottom:"2%"}}>
            <Navbar />
            </Grid>
            <Grid container display="flex" alignItems={'center'} justifyContent="center" sx={{backgroundColor:'#FEF6EF'}}>
            <Grid container alignItems={'center'} justifyContent="center">
            <Grid item display="flex">
            <Typography  sx={{ display: 'block',font: 'normal normal normal 32px/61px Poppins'}}
            component="span"
            variant="h3">
            {"Requests"}
            </Typography>
            </Grid>
            </Grid>
            <Grid container alignItems={'center'} justifyContent="center" >
            <Grid item display={"flex"}>
            <Typography sx={{ display: 'block',font: 'normal normal normal 18px/27px Poppins'}}
            component="span"
            variant="h6"
            color="#264653">
            {"Filter requests using tabs below"}
            </Typography>
            </Grid>
            </Grid>
            <Grid item>
            <TabBar itemOne = {"All"} itemTwo = {"Restuarants"} itemThree = {"Users"} getId={GetSelectedID} />
            </Grid>
            <Grid container display={"flex"} alignItems={'center'} justifyContent="center">
            <List sx={{width:'75%',height:'100%',overflow:'auto',maxHeight:"100vh",'&::-webkit-scrollbar': {
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
            {ngorequests.length!==0 && ngorequests.map(item =>(
                    <RequestItems image={`data:image/jpeg;base64,${item.image}`} name={getName(item)} heading1={"Type"} heading2={"Date"} pargaraph1={`${item.typeOfDonation} donation`} date={getDate(item.createdAt)} time={returnTime(item.createdAt)} userRequests={false} NGOrequests={true} Resreq={false} buttonStat={1}/>
            ))}
            {ngorequests.length===0 && selectedID === 1 && <Typography display="flex" sx={{alignContent:'center',justifyContent:'center',font: 'normal normal normal 42px/109px Poppins'}} component="span" variant="h3">{"No requests to show at the momment"}</Typography>}
            {ngorequests.length===0 && selectedID === 2 && <Typography display="flex" sx={{alignContent:'center',justifyContent:'center',font: 'normal normal normal 42px/109px Poppins'}} component="span" variant="h3">{"No requests to show at the momment"}</Typography>}
            {ngorequests.length===0 && selectedID === 3 && <Typography display="flex" sx={{alignContent:'center',justifyContent:'center',font: 'normal normal normal 42px/109px Poppins'}} component="span" variant="h3">{"No requests to show at the momment"}</Typography>}
            </List>
            </Grid>
            </Grid>
            </div>
            );
}
export default NGOacceptpage;
