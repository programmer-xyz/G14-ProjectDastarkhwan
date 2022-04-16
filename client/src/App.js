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
import FormsDonation from './components/Forms/formsDonation.jsx';
import DonationForms from './pages/donationsForms/donationForms.jsx';
import NGOacceptpage from './pages/ngoacceptpage/ngoacceptpage.jsx';
import ProfileCards from './components/ProfileCard/profileCard.jsx';
import ResDashboard from './pages/DashboardRes/DashboardRes.jsx';
import ProfileForms from './components/Forms/formsProfile.jsx';
import ResModals from './components/modalResturantDetails/modalResturantDetails.jsx';
import NgoModals from './components/modelNGODetails/modelNGOdetails.jsx';

const App = () => {

    return(
        <Router>
            <div className="App">
                <Routes> 
                    <Route path='/' element={<Login/>}/>
                    <Route path="/Signup" element= {<Signup/>}/>  
                    <Route path = "/donationForms" element= {<DonationForms Resturant={false} Number = {2}/>} />
                    <Route path='/Cards' element={<Cards Resturant={0} mealsDonated={10} ngosDonatedTo={10} monetaryDonations={20} mealDonations={40} rationDonations={10}/>}/>
                    <Route path="/footer" element={<FooterPage user={false}/>} />
                    <Route path="/NavBar" element = {<NavBar />} />
                    <Route path="/modelitems" element = {<RequestItems image={image1} name={"Abdul Muizz khan"} heading1={"Type"} heading2={"Date"} pargaraph1={"Meal Donations"} date={"7/03/4"} time={"10:47 am"} userRequests={false} NGOrequests={false} Resreq={true} buttonStat={1}/>} />
                    <Route path = "/modals" element = {<ModelMyRequest modelMsg={"Thank you! You have successfully made a Donation"} state={true} modalImage={image2} route={""} actionMsg={"Go to Signin"}/>} />
                    <Route path ="/dashboard" element = {<Dashboard/>} />
                    <Route path ="/forms" element = {<FormsDonation User={1} />} />
                    <Route path = "/profileForms" element = {<ProfileForms User={1} />} />
                    {/* <Route path = "/loginforms" element = {<LoginForm />} /> */}
                    <Route path="/ngoAcceptpage" element = {<NGOacceptpage />} />
                    <Route path = "/profileCard" element = {<ProfileCards />} />
                    <Route path ="/dashboardR" element = {<ResDashboard name={"Abdul Muizz khan"} />} />
                    <Route path = "/resturantModal" element={<ResModals state = {true} donationType={"Meals donation"} date={"07/07/22"} time={"10:27am"} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}/>} />
                    <Route path = "/ngoModel" element = {<NgoModals state={true} email={"muizz481@gmail.com"} phoneNumber={'1231343421-2'} address={"512 f2 johar town lahore"} accountNumber={"23134211-3"} description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} pointOfCName={"James Charles"} pointOfCEmail={"James charles"} pointOfCNumber={"1232441"}/>} />
                </Routes>
            </div>
        </Router>
    );

}
export default App;