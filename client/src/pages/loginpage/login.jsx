import './login.css';
import React from 'react';
import logo from '../../assets/MaskGroup2.png';
import TabBar from '../../components/TabBar/TabBar.jsx';
import LoginForm from '../../components/Forms/formslogin';
import { useState } from 'react';


function Login () { 


  const [selectedID,setID] = useState(1);

    function GetSelectID(Id)
    {
        setID(Id+1);
        
    }

    

  return (
    <div className="loginbody">
    <div className="left-container">
    <div className="left-div">
    <div className='headingL'>
    <h3 >Sign In</h3>
    </div>
    <div className="paragraphL">
    <p>Select whom you want to sign in as: </p>
    </div>
    <div className="tab-bar">
      <TabBar itemOne = {"User"} itemTwo = {"Restuarant"} itemThree = {"NGO"} getId={GetSelectID}/>
    </div>
    <div className="Loginform">
        <LoginForm user={selectedID} isAdmin={false}/>
    </div>
    </div>
    </div>
    <div className="right-container">
    <div className="right-div">
    <div className="heading-right">
    <h2>United we can end hunger!</h2>
    </div>
    <div className="paragraph-right">
    <p>Your every donation counts !</p>
    </div>
    <img className="image-c" src={logo}></img>
    </div>
      
    </div>

    </div>
  );
  
}

export default Login;
