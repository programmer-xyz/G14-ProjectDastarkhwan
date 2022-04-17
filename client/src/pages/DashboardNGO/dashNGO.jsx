import './dashNGO.scss';
import NavBar from '../../components/Navbar/Navbar.jsx';
import Cards from '../../components/Cards/cards.jsx';
import Cards2 from '../../components/ProfileCard/profileCard.jsx';
import { Grid,Typography,Box} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import image2 from '../../assets/output-onlinepngtools1.png';
import {myProfile} from '../../servicesApi/DashboardNgo.js';
import { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import ModalAccepted from '../../components/Modals/modalAccepted.jsx';

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

function NGODashboard (props){
    let navigate = useNavigate();

    const [email,setemail] = useState('ngo2@gmail.com');
    const [userStat,setUserStats] = useState({});
    const [state,setState] = useState(false);

    function onClick()
    {
        //setStateDonation(false);
        navigate('/ngoRequestAcceptPage');

    }
    async function getUserStats ()
    {
      try
      {
          
          let res = await myProfile(localStorage.getItem('email'));
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

    }, []);
    function handleClose()
    {
        setState(false);
    }
    function getModelStatus(open)
    {
        setState(open);
    }
    return(
    <Box sx = {{spacing: "0",backgroundColor:'rgba(244, 162, 97, 0.1)',paddingLeft:'5%',backgroundImage:`url(${image2})`,backgroundRepeat:'no-repeat',backgroundPositionX:'center',backgroundSize:'50% auto'}}>
        <ModalAccepted handleClose={handleClose} state={state} />
        <Grid  container direction="row" display="flex" sx={{width:'100%', height:'100%'}}>
            <Grid container sx={{margin:"0%"}}>
            <Grid item sx={{width:"100vw", height:"100%" ,padding:"0% 0% 4% 0%"}}>
            <NavBar />
            </Grid>
            </Grid>
            <Grid container alignContent={'center'} justifyContent={'center'} sx ={{marginTop:'4%'}}>
                <Grid item>
                <ThemeProvider theme={theme}>
                <Typography sx = {{display:'inline-block',letterSpacing:'-1.97px'}} component="span" variant="h3" color="#E76f51">
                {`Hello ${props.name} !`}
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
            <Grid container item xs={9} sx = {{width:'100%',height:'100%'}}>
            <Cards openDM={onClick} Resturant={1} monetaryDonations ={userStat.monetaryFundsAccepted} mealDonations={userStat.mealsAccepted} rationDonations={userStat.rationAccepted} openRequst={getModelStatus}/>
            </Grid>
            <Grid container item xs={3} sx = {{width:'100%', height:'100%'}}>
            <Cards2 Resturant={false} name={userStat.name} email={userStat.email} number={userStat.phoneNumber} description={userStat.description}/>
            </Grid>
            </Grid>
        </Grid>
        </Box>
    );
}
export default NGODashboard;