import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from './pages/loginpage/login.jsx';
import Signup from './pages/Signup/signup';
import DashAdmin from './pages/Dashboard/dashAdmin.jsx';
import './App.css';
import Dashboard from './pages/Dashboard/dashboard.jsx';
import DonationForms from './pages/donationsForms/donationForms.jsx';
import NGOacceptpage from './pages/ngoacceptpage/ngoacceptpage.jsx';
import ResDashboard from './pages/DashboardRes/DashboardRes.jsx';
import ResModals from './components/modalResturantDetails/modalResturantDetails.jsx';
import NgoModals from './components/modelNGODetails/modelNGOdetails.jsx';
import ModalNGO from './components/ModalNGO/ModalNGO.jsx';
import ForgotPass from './pages/ForgotPassword/forgotPass.jsx';
import AdminModalSignIn from './components/Modals/modalAdminSignIn.jsx';
import ResturantDetailModal from './components/modalResD/modelResD.jsx';
import Modalsmyrequest from './components/ModelMyRequest/ModelMyRequest.jsx';
import ProfileCards from './components/ProfileCard/profileCard.jsx';
import FormsOfPorfile from './components/Forms/formsProfile.jsx';
import ModalAccepted from './components/Modals/modalAccepted.jsx';
import UserProfile from './pages/UserProfile/userprofile.jsx';
import ResProfile from './pages/resProfile/resProfile.jsx';
import NGODashboard from './pages/DashboardNGO/dashNGO.jsx';
import NgoProfile from './pages/ngoProfile/ngoProfile.jsx';
import Modals from './components/Modals/SignOutModal.jsx';
import { useState } from 'react';

// import { UserInfo } from './customHooks/userInfo.js';
// import {UseLoginUser} from "./customHooks/LoginHook";
import PrivateRoute from './components/RestrictedRoute/restrictedRoute.js';
import { Switch } from '@mui/material';

const App = () => {
    const [userType, setUserType] = useState(''); // user, admin, ngo, rest
    // let role = "user";
    // const {loggedState} = UseLoginUser();

    return(
        <Router>
             {/* <UserInfo.Provider value={{loggedState }}> */}
            <div className="App">
                <Routes> 
             
                    {/* // add authentication routes here login /signup/forget/change/logout */}
                    <Route path='/' element={<Login setUserType={setUserType}/>}/>
                    <Route path="/adminlogin" element = {<AdminModalSignIn setUserType={setUserType} state = {true}/>} />
                    <Route path="/Signup" element= {<Signup/>}/> 
                    <Route path="/forgotpassword" element = {<ForgotPass />} />
                    <Route path="/signoutModal" element={<Modals state={true} modelMsg={"Are you sure you want to sign out"} actionMsg={"cancel"} actionMsg2={"sign out"}/>} />
                    
                    {/* add donation routes here  */}
                    <Route path = "/userdonationForms" element= {userType === 'user' ? <DonationForms setUserType={setUserType} Resturant={false}/> : <Login setUserType={setUserType}/>} />
                    <Route path = "/resturantdonationForms" element={userType === 'rest' ? <DonationForms setUserType={setUserType} Resturant={true}/> : <Login setUserType={setUserType}/>}/> 

                    {/* add dashboard routes here */}
                    <Route path ="/resturantDashboard" element = {userType === 'rest' ? <ResDashboard setUserType={setUserType} name={"Abdul Muizz khan"} /> : <Login setUserType={setUserType}/>} />
                    <Route path ="/userdashboard" element = {userType === 'user' ? <Dashboard setUserType={setUserType}/> : <Login setUserType={setUserType}/>} />
                    <Route path = "/adminDashboard" element = {userType === 'admin' ? <DashAdmin setUserType={setUserType}/> : <Login setUserType={setUserType}/>} />
                    <Route path = "/ngoDashboard" element = {userType === 'ngo' ? <NGODashboard setUserType={setUserType}/> : <Login setUserType={setUserType}/>}/>

                    {/* add Dashboard button routes here */}
                    <Route path="/ngoRequestAcceptPage" element = {userType === 'ngo' ? <NGOacceptpage setUserType={setUserType} /> : <Login setUserType={setUserType}/>} />
                    <Route path = "/myRequests" element = {<Modalsmyrequest state={true} User={0}/>} />

                    {/* add models routes and cards etc here*/}
                    <Route path = "/resturantModal" element={<ResModals state = {true} donationType={"Meals donation"} date={"07/07/22"} time={"10:27am"} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>} />
                    <Route path = "/ngoModel" element = {<NgoModals state={true} email={"muizz481@gmail.com"} phoneNumber={'1231343421-2'} address={"512 f2 johar town lahore"} accountNumber={"23134211-3"} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} pointOfCName={"James Charles"} pointOfCEmail={"Jamescharles@gmail.com"} pointOfCNumber={"1232441"}/>} />
                    <Route path="/ModalNGO" element = {<ModalNGO state={true}/>} />
                    <Route path="/profileCards" element = {<ProfileCards />} />
                    <Route path = "/modelResDetails" element ={<ResturantDetailModal state={true} email={"muizz481@gmail.com"} phoneNumber={'1231343421-2'} address={"512 f2 johar town lahore"} accountNumber={"23134211-3"} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} pointOfCName={"James Charles"} pointOfCEmail={"Jamescharles@gmail.com"} pointOfCNumber={"1232441"}/>} />
                    
            
                </Routes>

                {/* <PrivateRoute path="/userdonationForms"  component={Resturant => <DonationForms setUserType={setUserType} {...Resturant}/>}/>
                <PrivateRoute path="/adminDashboard" component={DashAdmin}/> */}
            </div>
            {/* </UserInfo.Provider> */}
        </Router>

    );

}
export default App;