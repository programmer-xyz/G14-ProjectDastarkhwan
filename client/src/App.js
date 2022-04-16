import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from './pages/loginpage/login.jsx';
import Cards from './components/Cards/cards.jsx';
import FooterPage from './components/Footer/footer.jsx';
import image2 from './assets/check-circle.svg';
import RequestItems from './components/RequestItems/requestItems.jsx';
import NavBar from './components/Navbar/Navbar.jsx'
import image1 from './components/RequestItems/testImage.jpeg';
import Signup from './pages/Signup/signup';
import DashAdmin from './pages/Dashboard/dashAdmin.jsx';
import './App.css';
import Dashboard from './pages/Dashboard/dashboard.jsx';
import ModelMyRequest from './components/ModelMyRequest/ModelMyRequest.jsx';
import FormsDonation from './components/Forms/formsDonation.jsx';
import DonationForms from './pages/donationsForms/donationForms.jsx';
import NGOacceptpage from './pages/ngoacceptpage/ngoacceptpage.jsx';
import ProfileCards from './components/ProfileCard/profileCard.jsx';
import Modals from './components/Modals/SignOutModal.jsx';
import ModalNGO from './components/ModalNGO/ModalNGO.jsx';
import ForgotPass from './pages/ForgotPassword/forgotPass.jsx';
import AdminModalSignIn from './components/Modals/modalAdminSignIn.jsx';
import FormsOfPorfile from './components/Forms/formsProfile.jsx';
import ModalAccepted from './components/Modals/modalAccepted.jsx';

const App = () => {

    return(
        <Router>
            <div className="App">
                <Routes> 
                    <Route path='/' element={<Login/>}/>
                    <Route path="/Signup" element= {<Signup/>}/>  
                    <Route path = "/donationForms" element= {<DonationForms Resturant={false} Number = {2}/>} />
                    <Route path='/Cards' element={<Cards Resturant={2} mealsDonated={10} ngosDonatedTo={10} monetaryDonations={20} mealDonations={40} rationDonations={10}/>}/>
                    <Route path="/footer" element={<FooterPage user={false}/>} />
                    <Route path="/NavBar" element = {<NavBar />} />
                    <Route path="/modelitems" element = {<RequestItems image={image1} name={"Abdul Muizz khan"} heading1={"Type"} heading2={"Date"} pargaraph1={"Meal Donations"} date={"7/03/4"} time={"10:47 am"} userRequests={false} NGOrequests={true} Resreq={true} buttonStat={1}/>} />
                    <Route path = "/modalRequests" element = {<ModelMyRequest modelMsg={"Thank you! You have successfully made a Donation"} state={true} modalImage={image2} route={""} actionMsg={"Go to Signin"}/>} />
                    <Route path ="/dashboard" element = {<Dashboard/>} />
                    <Route path ="/forms" element = {<FormsDonation User={1} />} />
                    <Route path = "/donationForms" element= {<DonationForms  Resturant = {false} Number = {1}/>} />
                    <Route path = "/newForms" element = {<FormsOfPorfile User ={1} />} />
                    <Route path="/ngoAcceptpage" element = {<NGOacceptpage />} />
                    <Route path = "/profileCard" element = {<ProfileCards />} />
                    <Route path = "/Admin" element = {<DashAdmin/>} />
                    <Route path = "/modals" element = {<Modals modelMsg={"Are you sure you want to sign out ?"} state={true} modalImage={image2} route={""} actionMsg={"Cancel"} actionMsg2={"Confirm"}/>} />
                    <Route path="/ModalNGO" element = {<ModalNGO state={true}/>} />
                    <Route path="/forgotpassword" element = {<ForgotPass />} />
                    <Route path="/adminlogin" element = {<AdminModalSignIn state = {true}/>} />
                    <Route path="/accepted" element = {<ModalAccepted state = {true}/>} />
                </Routes>
            </div>
        </Router>
    );

}
export default App;