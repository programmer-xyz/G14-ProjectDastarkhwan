import './dashAdmin.css';
import CardContent from '@mui/material/CardContent';
import NavBar from '../../components/Navbar/Navbar.jsx'
import AdminAcceptpage from '../../components/AdminAccept/adminAccept.jsx';
import {UseLoginUser} from "../../customHooks/LoginHook";
import { useNavigate } from 'react-router-dom';

function DashAdmin ({setUserType}){

    // let navigate = useNavigate();
    // let role = "admin";
    
    
    return (
        <div className = "main">
        <NavBar setUserType={setUserType}/>
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
export default DashAdmin;