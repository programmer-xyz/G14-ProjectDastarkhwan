import './dashAdmin.css';
import CardContent from '@mui/material/CardContent';
import NavBar from '../../components/Navbar/Navbar.jsx'
import AdminAcceptpage from '../../components/AdminAccept/adminAccept.jsx';

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
        <AdminAcceptpage />
        </CardContent>
        </div>
        
    );
}
export default dashAdmin;