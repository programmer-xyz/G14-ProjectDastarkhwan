import './dashAdmin.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import NavBar from '../../components/Navbar/Navbar.jsx'
import NGOacceptpage from '../../pages/ngoacceptpage/ngoacceptpage.jsx';
import FooterPage from '../../components/Footer/footer.jsx';
function dashAdmin (){
    return (
        <div className = "main">
        <NavBar/>
        <div className = 'nameUserDash'>
            <img></img>
            <h1>Welcome Admin!</h1>
            </div>
            <div className = 'welcomeDash'>
            <p>Welcome to your Dashboard, here you can accept request generated from Resturants and NGOs</p>
            </div>
        <CardContent>
        <NGOacceptpage adminDashboard={true}/>
        </CardContent>
        </div>
        
    );
}
export default dashAdmin;