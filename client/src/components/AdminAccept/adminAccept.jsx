import './adminAccept.scss'
import Grid from "@mui/material/Grid";
import RequestItems from '../../components/RequestItems/requestItems.jsx';
import TabBar from '../../components/TabBar/TabBar.jsx';
import { Typography } from '@mui/material';
import React, { useState,useEffect } from 'react';
import { List } from '@mui/material';
import image1 from '../../components/RequestItems/testImage.jpeg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { viewApplicationadminDashboard } from '../../servicesApi/authenticationApi';
import ModalRes from '../../components/modalResD/modelResD.jsx';
import ModalNgo from '../../components/modelNGODetails/modelNGOdetails';
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


function AdminAcceptpage(props){

        const [selectedID,setID] = useState(1);
        const [requestAdmin,setrequestAdmin] = useState([]);
        const [resturantList,setResturantList] = useState([]);
        const [ngoList,setngoList] = useState([]);
        const [openRes,setopenRes] = useState(false);
        const [openNgo,setopenNgo] = useState(false);
        const [details,setdetails] = useState({});
        function handleClose(reason)
        {
            if (reason !== "backdropClick")
            {
                 return 
            }
            setopenRes(false);
            setopenNgo(false);
        }
        function onclick()
        {
            console.log("called")
            setopenRes(false);
            setopenNgo(false);
        }
        function getModelStatus(open,details)
        {
            console.log(details)
            setdetails(details);
            if(details.accountType==='restaurant')
            {
                setopenRes(open);
            }
            else
            {
                setopenNgo(open);
            }
            
        }
        const Adminrequests = async() =>{
            try {
                var listofReq = await viewApplicationadminDashboard();

                var listofRes = listofReq.data.apps.filter((ele)=>{
                    return ele.accountType === "restaurant";
                });
                var listofNgo = listofReq.data.apps.filter((ele)=>{
                    return ele.accountType === "ngo";
                });
                console.log(listofRes);
                console.log(listofNgo);
                setResturantList(listofRes);
                setngoList(listofNgo);
                setrequestAdmin(listofReq.data.apps);
            }
            catch(err){
                console.log(err);
            }
        }
        function getselectId (id)
        {
            setID(id+1)
        }
        useEffect (()=>{
            
            Adminrequests();
        },[])

        return (
            <div className="yello1">
            <ModalRes details={details} state={openRes} handleClose={handleClose} onclick={onclick}/>
            <ModalNgo details={details} state={openNgo} handleClose={handleClose} onclick={onclick}/>
            <Grid sx ={{marginBottom:"2%"}}>
            </Grid>
            <Grid container display="flex" alignItems={'center'} justifyContent="center">
            <Grid container alignItems={'center'} justifyContent="center">
            </Grid>
            <Grid container alignItems={'center'} justifyContent="center" >
            </Grid>
            <Grid item>
            <TabBar itemOne = {"All"} itemTwo = {"Restuarants"} itemThree = {"NGO"} getId={getselectId}/>
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
            {requestAdmin.length!==0 && selectedID === 1 && requestAdmin.map(item =>(
                 <RequestItems userDeatils={item} image={`data:image/jpeg;base64,${item.image}`} name={item.name} description={item.description} adminRequests ={true} buttonStat={1} openRequst={getModelStatus}/>
            ))}
            {resturantList.length!==0 && selectedID === 2 && resturantList.map(item =>(
                <RequestItems userDeatils={item}  image={`data:image/jpeg;base64,${item.image}`} name={item.name}  description={item.description}  adminRequests={true} buttonStat={1} openRequst={getModelStatus}/>
            ))}
            {ngoList.length!==0 && selectedID === 3 && ngoList.map(item =>(
                <RequestItems userDeatils={item} image={`data:image/jpeg;base64,${item.image}`} name={item.name} description={item.description}  adminRequests={true} buttonStat={1} openRequst={getModelStatus}/>
            ))}
            {requestAdmin.length===0 && selectedID === 1 && <Typography display="flex" sx={{alignContent:'center',justifyContent:'center',font: 'normal normal normal 42px/109px Poppins'}} component="span" variant="h3">{"No requests to show at the momment"}</Typography>}
            {resturantList.length===0 && selectedID === 2 && <Typography display="flex" sx={{alignContent:'center',justifyContent:'center',font: 'normal normal normal 42px/109px Poppins'}} component="span" variant="h3">{"No requests to show at the momment"}</Typography>}
            {ngoList.length===0 && selectedID === 3 && <Typography display="flex" sx={{alignContent:'center',justifyContent:'center',font: 'normal normal normal 42px/109px Poppins'}} component="span" variant="h3">{"No requests to show at the momment"}</Typography>}
            </List>
            </Grid>
            </Grid>
            </div>
            );
}
export default AdminAcceptpage;
