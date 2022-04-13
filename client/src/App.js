import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from './pages/loginpage/login.js';
import Cards from './components/Cards/cards.jsx';
import FooterPage from './components/Footer/footer.jsx';
import RequestItems from './components/RequestItems/requestItems.jsx';
import NavBar from './components/Navbar/Navbar.jsx'
import image1 from './components/RequestItems/testImage.jpeg';
import Signup from './pages/Signup/signup';
import './App.css';
import Modals from './components/Modals/Modals.jsx'
import Dashboard from './pages/Dashboard/dashboard.jsx';

import FormsDonation from './components/Forms/formsDonation.jsx';

import DonationForms from './pages/donationsForms/donationForms.jsx';
import LoginForm from './components/Forms/formslogin.jsx';
const App = () => {

    return(
        <Router>
            <div className="App">
                <Routes> 
                    <Route path='/' element={<Login/>}/>
                    <Route path="/Signup" element= {<Signup/>}/> 
                    <Route path='/Cards' element={<Cards Resturant={2} mealsDonated={10} ngosDonatedTo={10} monetaryDonations={20} mealDonations={40} rationDonations={10}/>}/>
                    <Route path="/footer" element={<FooterPage user={false}/>} />
                    <Route path="/NavBar" element = {<NavBar />} />
                    <Route path="/modelitems" element = {<RequestItems image={image1} name={"Abdul Muizz khan"} heading1={"Type"} heading2={"Date"} pargaraph1={"Meal Donations"} date={"7/03/4"} time={"10:47 am"} userRequests={true} NGOrequests={false} Resreq={true} buttonStat={0}/>} />
                    <Route path = "/modals" element = {<Modals/>} />
                    <Route path ="/dashboard" element = {<Dashboard/>} />
                    <Route path ="/forms" element = {<FormsDonation User={1} />} />
                    <Route path = "/donationForms" element= {<DonationForms  Number = {2}/>} />
                    <Route path = "/loginforms" element = {<LoginForm />} />
                </Routes>
            </div>
        </Router>
    );

}
export default App;