import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/loginpage/login.js';
import Navbar from "./components/Navbar/Navbar";
// import ForgetPassword from "./pages/forgetpassword/forgetpassword.js";

ReactDOM.render(
    <Navbar/>,
    <Login />,
    //<ForgetPassword />,
  document.getElementById('root')
);
