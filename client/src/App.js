import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from './pages/loginpage/login.js';
import Cards from './components/Cards/cards.jsx';
import Forms from './components/Forms/forms.jsx';
import FormsDonation from './components/Forms/formsDonation.jsx';
//import pages here and call then the way login has been called
const App = () => {
    return(
        <Router>
            <div className="App">
                <Routes> 
                    {/* <Route path='/' element={<Login/>}/> */}
                    <Route path='/' element={<FormsDonation User = {1}/>}/>
                    {/* <Route path='/' element={<Cards Resturant={0} mealsDonated={10} ngosDonatedTo={10} monetaryDonations={20} mealDonations={40} rationDonations={10}/>}/> */}
                </Routes>
            </div>
        </Router>
    );

}


export default App