import './resProfile.scss';
import NavBar from '../../components/Navbar/Navbar.jsx';
import Cards from '../../components/Cards/cards.jsx';
import Cards2 from '../../components/ProfileCard/profileCard.jsx';
import { Grid,Typography,Box} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import image2 from '../../assets/output-onlinepngtools1.png';
import FormsProfile from '../../components/Forms/formsProfile';

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

function resProfile (props){
    return(
    <Box sx = {{spacing: "0",backgroundColor:'rgba(233, 196, 106, 0.1)',paddingLeft:'5%',backgroundImage:`url(${image2})`,backgroundRepeat:'no-repeat',backgroundPositionX:'center',backgroundSize:'50% auto'}}>
        <Grid  container direction="row" display="flex" sx={{width:'100%', height:'100%'}}>
            <Grid container sx={{margin:"0%"}}>
            <Grid item sx={{width:"100vw", height:"100%" ,padding:"0% 0% 4% 0%"}}>
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
                {"Welcome to your dashboard, here you can edit your personal info, see stats and make donations!"}
                </Typography>
                </ThemeProvider>
            </Grid>
            </Grid>
            <Grid container display="flex"  sx ={{height:"50%", }}>
            <Grid item sx = {{width:'auto',height:'auto'}}>
            <FormsProfile User = {2}/>
            </Grid>
            <Grid item sx = {{width:'30%', height:'25%'}}>
            <Cards2 />
            </Grid>
            </Grid>
        </Grid>
        </Box>
    );
}
export default resProfile;