import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Cards from './components/Cards/cards.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <App/>,
  // <Cards Resturant={1} mealsDonated={10} ngoDonatedTo={10} monetaryDonations={20} mealDonations={40} rationDonations={10}/>,
  document.getElementById('root')
);
