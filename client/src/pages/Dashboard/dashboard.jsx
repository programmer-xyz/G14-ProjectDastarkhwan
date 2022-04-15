import './dashboard.css';
import NavBar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/footer.jsx';
import Cards from '../../components/Cards/cards.jsx';
import Cards2 from '../../components/ProfileCard/profileCard.jsx';
import { Grid,Typography } from '@mui/material';
function Dashboard (){
    return(
        <div>
        <NavBar />
        <Grid  container direction="row" display="flex">
            <Grid container display="flex" alignItems={"left"} justifyContent={"left"}>
                <Grid>
                <Typography sx = {{display:'block'}} component="span" variant="h4">

                </Typography>
                </Grid>
            </Grid>
        </Grid>
        </div>
    );
}
export default Dashboard;