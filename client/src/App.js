import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from './pages/loginpage/login.js';
import Cards from './components/Cards/cards.jsx';
import FooterPage from './components/Footer/footer.jsx';
//import pages here and call then the way login has been called


const App = () => {

    return(
        <Router>
            <div className="App">
                <Routes> 
                    <Route path='/' element={<Login/>}/>
                    <Route path='/hello' element={<Cards Resturant={2} mealsDonated={10} ngosDonatedTo={10} monetaryDonations={20} mealDonations={40} rationDonations={10}/>}/>
                    <Route path="/footer" element={<FooterPage user={true}/>} />
                  
                </Routes>
            </div>

         </Router>
    );

}


export default App