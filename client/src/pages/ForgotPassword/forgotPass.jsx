import './forgotPass.css';
import React from 'react';
import logo from '../../assets/MaskGroup2.png';
import ForgotForm from '../../components/Forms/forgotPassform.jsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPass (){ 

const navigate1 = useNavigate();

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
<h3 >Forgot Password?</h3>
</div>
<div className="paragraphL">
    <p>No sweat. Enter the email used for your account and we'll shoot you an email to get back on track.</p>
</div>
<p>&nbsp;</p>
<div className="Loginform">
    <ForgotForm />
</div>
<div className="admin-login">
    <p>Feeling Lucky?</p>
    <button className="adminmodel" onClick = {()=>navigate1('/')}>Try Signing In?</button>
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
export default ForgotPass;
