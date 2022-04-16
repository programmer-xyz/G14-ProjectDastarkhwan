import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from './pages/loginpage/login.jsx';
import Signup from './pages/Signup/signup';
import './App.css';
import Dashboard from './pages/Dashboard/dashboard.jsx';
import DonationForms from './pages/donationsForms/donationForms.jsx';
import NGOacceptpage from './pages/ngoacceptpage/ngoacceptpage.jsx';
import ResDashboard from './pages/DashboardRes/DashboardRes.jsx';
import ResModals from './components/modalResturantDetails/modalResturantDetails.jsx';
import NgoModals from './components/modelNGODetails/modelNGOdetails.jsx';


const App = () => {

    return(
        <Router>
            <div className="App">
                <Routes> 
                    <Route path='/' element={<Login/>}/>
                    <Route path="/Signup" element= {<Signup/>}/>  
                    <Route path = "/userdonationForms" element= {<DonationForms Resturant={false}/>} />
                    <Route path = "/resturantdonationForms" element={<DonationForms Resturant={true}/>}/> 
                    <Route path ="/userdashboard" element = {<Dashboard/>} />
                    <Route path="/ngoRequestAcceptPage" element = {<NGOacceptpage />} />
                    <Route path ="/resturantDashboard" element = {<ResDashboard name={"Abdul Muizz khan"} />} />
                    <Route path = "/resturantModal" element={<ResModals state = {true} donationType={"Meals donation"} date={"07/07/22"} time={"10:27am"} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>} />
                    <Route path = "/ngoModel" element = {<NgoModals state={true} email={"muizz481@gmail.com"} phoneNumber={'1231343421-2'} address={"512 f2 johar town lahore"} accountNumber={"23134211-3"} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} pointOfCName={"James Charles"} pointOfCEmail={"James charles"} pointOfCNumber={"1232441"}/>} />
                </Routes>
            </div>
        </Router>
    );

}
export default App;