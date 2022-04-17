import './formslogin.css';
import {useState} from 'react';
import { forgetPassuser,forgetPassngo,forgetPassres } from '../../servicesApi/authenticationApi';
import { useNavigate } from 'react-router-dom';



const initialState = {
    email:""
}
const initialState2 = {
    email:""
}
const initialState3 = {
    email:""
}
function ForgotForm(props){

    let navigate = useNavigate();
    const [email,setEmail] = useState(initialState);
    const [email1,setEmail1] = useState(initialState2);
    const [email2,setEmail2] = useState(initialState3);

    
    const handleChange = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setEmail({...email, [name]: value});

    }
    const handleChange2 = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setEmail1({...email1, [name]: value});

    }
    const handleChange3 = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setEmail2({...email2, [name]: value});

    }
    const onCreate = (e) =>{

        e.preventDefault();
        forgetPassuser(email.email).then((response)=>{
            if(response.data.success){
               localStorage.setItem('user_email',email.email);
               console.log(localStorage.getItem('user_email'));
               navigate("/newpass/user");
            }
        }).catch((err)=>{
            alert(err.data.response);
            navigate("/")
        });
    
    }
    const onCreate2 = (e) =>{

        e.preventDefault();
        forgetPassres(email1.email).then((response)=>{
            if(response.data.success){
                localStorage.setItem('res_email',email1.email);
                navigate("/newpass/res");
            }
        }).catch((err)=>{
            alert(err.data.response);
            navigate("/")
        });
    
    }
    const onCreate3 = (e) =>{

        e.preventDefault();
        forgetPassngo(email2.email).then((response)=>{
            if(response.data.success){
                localStorage.setItem('ngo_email',email2.email);
                navigate("/newpass/user");
            }
        }).catch((err)=>{
            alert(err.data.response);
            navigate("/")
        });
    
    }
    if (props.User === 1)
    {
        return (
            <div className ="form">
            <form action="/">
            <input type = "email" placeholder = "Email" className="input1" value={email.email} name ="email" onChange={handleChange}/>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <button className = "sign-in" onClick={onCreate}>Submit</button>
            </form>
            </div>
        );
    }
    else if (props.User === 2)
    {
        return (
            <div className ="form">
            <form action="/">
            <input type = "email" placeholder = "Email" className="input1" value={email1.email} name = "email" onChange={handleChange2}/>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <button className = "sign-in" onClick={onCreate2}>Submit</button>
            </form>
            </div>
        );
    }
    else if (props.User === 3)
    {
        return (
            <div className ="form">
            <form action="/">
            <input type = "email" placeholder = "Email" className="input1" value={email2.email} name = "email" onChange={handleChange3}/>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <button className = "sign-in" onClick={onCreate3}>Submit</button>
            </form>
            </div>
        );
    }
    
}
export default ForgotForm;