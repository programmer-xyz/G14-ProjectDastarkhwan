import './dashboard.css';
import NavBar from '../../components/Navbar/Navbar.jsx';
import Cards from '../../components/Cards/cards.jsx';
import Cards2 from '../../components/ProfileCard/profileCard.jsx';
import { Grid,Typography,Box} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'Sans-Serif',
      ].join(','),
      color:'#264653',
      font:'normal normal normal 42px/109px Poppins',
    },});

const theme1 = createTheme({
    typography: {
        fontFamily: [
        'Poppins',
        'Sans-Serif',
        ].join(','),
        color:'#264653'
    },});

function Dashboard (props){
    return(
        <div className="dashboarddiv">
        <Box sx = {{spacing: "0",backgroundColor:'rgba(233, 196, 106, 0.1)',paddingLeft:'5%'}}>
        <Grid  container direction="row" display="flex" >
            <Grid container sx={{margin:"0%"}}>
            <Grid item sx={{width:"100%", height:"100%" ,padding:"0% 0% 4% 0%"}}>
            <NavBar />
            </Grid>
            </Grid>
            <Grid container alignContent={'center'} justifyContent={'center'} sx ={{marginTop:'4%'}}>
                <Grid item>
                <ThemeProvider theme={theme}>
                <Typography sx = {{display:'inline-block',letterSpacing:'-1.97px'}} component="span" variant="h3" color="#E76F51">
                {"Hello Jane!"}
                </Typography>
                </ThemeProvider>
                </Grid>
            </Grid>
            <Grid container alignContent={'center'} justifyContent={'center'} display="flex" sx={{marginBottom:'15%'}}>
            <Grid item>
                <ThemeProvider theme={theme1}>
                <Typography sx = {{display:'inline-block'}} component="span" variant="h5" color="black">
                {"welcome to your dashboard, here you can edit your personal info, see stats and make donations!"}
                </Typography>
                </ThemeProvider>
            </Grid>
            </Grid>
            <Grid container display="flex" direction="row-reverse" sx ={{height:"50%"}} columns={2}>
            <Grid item sx = {{width:'100%',height:'25%'}}>
             <Cards Resturant={2} mealDonations={10} rationDonations={20} monetaryDonations={30}/>
            </Grid>
            <Grid item sx={{width:'25%',height:'100%',position:"relative",bottom:"640px"}}>
            <Cards2 />
            </Grid>
            </Grid>
        </Grid>
        </Box>
        </div>
    );
}
export default Dashboard;