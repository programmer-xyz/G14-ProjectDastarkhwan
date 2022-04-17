import './DashboardRes.css';
import NavBar from '../../components/Navbar/Navbar.jsx';
import Cards from '../../components/Cards/cards.jsx';
import Cards2 from '../../components/ProfileCard/profileCard.jsx';
import { Grid,Typography,Box} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import image2 from '../../assets/ResturantbackgroundImage.png';
import {useState,useEffect} from 'react';
import {myProfile} from '../../servicesApi/DashboardResturant.js';
import { useNavigate,createSearchParams } from "react-router-dom";
import Modalsmyrequest from "../../components/ModelMyRequest/ModelMyRequest.jsx";
import ModalNGO from "../../components/ModalNGO/ModalNGO.jsx"
const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'Sans-Serif',
      ].join(','),
    },});

const theme1 = createTheme({
    typography: {
        fontFamily: [
        'Poppins',
        'Sans-Serif',
        ].join(','),    
    },});

function Dashboard (props){
    let navigate = useNavigate();
    const[userStat,setUserStats] = useState({})
    const [state,setState] = useState(false);
    const [stateDonation,setStateDonation] = useState(false);
    const [route,setRoute] = useState ('');
    const [email,setEmail] = useState ('rest4@gmail.com');
    const [userId,setUserId] = useState ('62386a881d8d6e8aeabe6d6f')
    function handleClose(reason)
    {
        setState(false);
    }
    function handleCloseDonation()
    {
        setStateDonation(false);
    }
    function onClick(email)
    {
        setStateDonation(false);
        navigate({pathname:'/resturantdonationForms',
        search: `?ngoSelected=${email}`
    });

    }
    async function getUserStats ()
    {
      try
      {
          
          let res = await myProfile(email)
          setUserStats(res.data.body);
          console.log(userStat);
        }
        catch (err)
        {
            console.log(err)
        }
    }
    useEffect( ()=>{
        getUserStats();

    }, [])
    function getModelStatus(open)
    {
        setState(open);
    }
    function getDonationModelStatus(open)
    {
        setStateDonation(open);
    }

    return(
    <Box sx = {{spacing: "0",backgroundColor:'rgba(42, 157, 143, 0.1)',paddingLeft:'5%',backgroundImage:`url(${image2})`,backgroundRepeat:'no-repeat',backgroundPositionX:'center',backgroundSize:'50% auto'}}>
        <Modalsmyrequest User= {1} handleClose={handleClose} state={state} email={email}/>
        <ModalNGO onC={onClick}  state={stateDonation} role={"rest"}  id_user={userId} handleClose={handleCloseDonation}/>
        <Grid  container direction="row" display="flex" sx={{width:'100%', height:'100%'}}>
            <Grid container sx={{margin:"0%"}}>
            <Grid item sx={{width:"100vw", height:"100%" ,padding:"0% 0% 4% 0%"}}>
            <NavBar />
            </Grid>
            </Grid>
            <Grid container alignContent={'center'} justifyContent={'center'} sx ={{marginTop:'4%'}}>
                <Grid item>
                <ThemeProvider theme={theme}>
                <Typography sx = {{display:'inline-block',letterSpacing:'-1.97px'}} component="span" variant="h3" color="#264653">
                {`Hello ${userStat.name} !`}
                </Typography>
                </ThemeProvider>
                </Grid>
            </Grid>
            <Grid container alignContent={'center'} justifyContent={'center'} display="flex" sx={{marginBottom:'15%'}}>
            <Grid item>
                <ThemeProvider theme={theme1}>
                <Typography sx = {{display:'inline-block'}} component="span" variant="h5" color="#132B34">
                {"Welcome to your dashboard, here you can edit your personal info, see stats and make donations!"}
                </Typography>
                </ThemeProvider>
            </Grid>
            </Grid>
            <Grid container direction="row" display="flex"  sx ={{height:"50%"}} marginBottom="10%">
            <Grid container item xs ={9} sx = {{width:'100%',height:'100%'}}>
            <Cards  openDM={getDonationModelStatus} Resturant={0} mealsDonated={userStat.mealsDonated} ngosDonatedTo={userStat?.donations?.length} openRequst={getModelStatus} />
            </Grid>
            <Grid container item xs ={3} sx = {{width:'100%', height:'100%'}}>
            <Cards2 Resturant={true} name={userStat.name} email={userStat.email} number={userStat.phoneBumber} description={userStat.description}/>
            </Grid>
            </Grid>
        </Grid>
        </Box>
    );
}
export default Dashboard;