import './newPassword.css';
import React from 'react';
import logo from '../../assets/MaskGroup2.png';
import ForgotForm from '../../components/Forms/forgotPassform.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {updatePassuser} from '../../servicesApi/authenticationApi'

const initialState = {
    password:""
}
function NewPass (){ 
const navigate = useNavigate();
    const [password, setPassword] = useState(initialState)

    const onClick = (e) =>{
        e.preventDefault();
        let email = localStorage.getItem('user_email');
        console.log(email);
        updatePassuser(email, password.password).then((response)=>{
            if(response.data.success){
               navigate("/");
            }
        }).catch((err)=>{
            alert(err.data.response);
            navigate("/")
        });
    }

    const handleChange = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setPassword({...password, [name]: value});

    }
return (
    <div className="loginbody">
    <div className="left-container">
    <div className="left-div">
    <div className='headingL'>
    <h3 >Email verified</h3>
    </div>
    <div className="paragraphL">
        <p>Enter your new password to sign in</p>
    </div>
    <p>&nbsp;</p>
    <div className="Loginform">
    <div className ="form">
        <form >
        <input type = "password" placeholder = "New Password" value = {password.password} className="input1" name="password" onChange={handleChange}/>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <button className = "sign-in" onClick={onClick}>Confirm</button>
        </form>
        </div>
    </div>
    <div className="admin-login">
        <p>Feeling Lucky?</p>
        <button className="adminmodel">Try Signing In?</button>
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
export default NewPass;
