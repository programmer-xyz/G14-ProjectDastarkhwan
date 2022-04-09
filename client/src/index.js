import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/loginpage/login.js';
import Navbar from "./components/Navbar/Navbar";
import ForgetPassword from "./pages/forgetpassword/forgetpassword.js";
import FooterPage from "./components/Footer/footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards/cards.jsx'

ReactDOM.render(
    // <Navbar/>,
    // <Login />,
    // <ForgetPassword />
    
    // <FooterPage user={true}/>,
    <Cards Resturant={2} mealsDonated={97} ngosDonatedTo={87} mealDonations={10} rationDonations={20} monetaryDonations={100}/>,
  document.getElementById('root')
);
