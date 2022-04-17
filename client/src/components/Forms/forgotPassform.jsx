import './formslogin.css';
import {useState} from 'react';


const initialState = {
    email:""
}
function ForgotForm(props){

    const [email,setEmail] = useState(initialState);
    function handleClick()
    {

    }
    return (
    <div className ="form">
    <form action="/">
    <input type = "email" placeholder = "Email" className="input1" value={initialState.email}/>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <button className = "sign-in" onClick={handleClick}>Submit</button>
    </form>
    </div>
);
}
export default ForgotForm;