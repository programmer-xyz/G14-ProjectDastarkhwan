import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from './pages/loginpage/login.jsx';
import Cards from './components/Cards/cards.jsx';
import FooterPage from './components/Footer/footer.jsx';
import image2 from './assets/check-circle.svg';
import RequestItems from './components/RequestItems/requestItems.jsx';
import NavBar from './components/Navbar/Navbar.jsx'
import image1 from './components/RequestItems/testImage.jpeg';
import Signup from './pages/Signup/signup';
import './App.css';
import Dashboard from './pages/Dashboard/dashboard.jsx';
import ModelMyRequest from './components/ModelMyRequest/ModelMyRequest.jsx';

import DonationForms from './pages/donationsForms/donationForms.jsx';

const App = () => {

    return(
        <Router>
            <div className="App">
                <Routes> 
                    <Route path='/' element={<Login/>}/>
                    <Route path="/Signup" element= {<Signup/>}/>  
                    <Route path = "/donationForms" element= {<DonationForms Resturant={false} Number = {1}/>} />
                    
                    <Route path='/Cards' element={<Cards Resturant={2} mealsDonated={10} ngosDonatedTo={10} monetaryDonations={20} mealDonations={40} rationDonations={10}/>}/>
                    <Route path="/footer" element={<FooterPage user={false}/>} />
                    <Route path="/NavBar" element = {<NavBar />} />
                    <Route path="/modelitems" element = {<RequestItems image={image1} name={"Abdul Muizz khan"} heading1={"Type"} heading2={"Date"} pargaraph1={"Meal Donations"} date={"7/03/4"} time={"10:47 am"} userRequests={false} NGOrequests={false} Resreq={true} buttonStat={1}/>} />
                    <Route path = "/modals" element = {<ModelMyRequest modelMsg={"Thank you! You have successfully made a Donation"} state={true} modalImage={image2} route={""} actionMsg={"Go to Signin"}/>} />
                    <Route path ="/dashboard" element = {<Dashboard/>} />
                   
   
                </Routes>
            </div>
        </Router>
    );

}
export default App;