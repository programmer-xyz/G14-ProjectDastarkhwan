import './newPassword.css';
import React from 'react';
import logo from '../../assets/MaskGroup2.png';
import ForgotForm from '../../components/Forms/forgotPassform.jsx';
import { useState } from 'react';

function NewPass (){ 
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
<h3 >Email verified</h3>
</div>
<div className="paragraphL">
    <p>Enter your new password to sign in</p>
</div>
<p>&nbsp;</p>
<div className="Loginform">
<div className ="form">
    <form action="/">
    <input type = "password" placeholder = "New Password" className="input1"/>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <button className = "sign-in" type = "submit">Confirm</button>
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
