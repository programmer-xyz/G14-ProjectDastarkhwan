import './formslogin.css';
import { useState } from 'react';
import {userLogin, ngoLogin , restLogin } from '../../servicesApi/authenticationApi';
import {useNavigate,  createSearchParams} from 'react-router-dom';

const user1Init ={

    email:"",
    pw:"",

};


function LoginForm(prop){
    let navigate = useNavigate();
    const [user1, setUser1] = useState(user1Init);

    const handleForm1 = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setUser1({...user1, [name]: value});
    
    }


    const onLogin = (e) =>{
        
        e.preventDefault();
        if(prop.user === 1){
            userLogin(user1.email, user1.pw).then((response)=>
            {
                    if(response.data.success)
                    {
                        localStorage.setItem('user_id',response.data.user._id);
                        localStorage.setItem('email',response.data.user.email);
                        localStorage.setItem('role','user');
                        navigate("/userdashboard" );
                        console.log(response);
                    }
                    else{
                        console.log("here")
                    }
        
            })
            .catch((err)=>
            {
                console.log(err);
            })
        
        }

        if(prop.user === 2){
            restLogin(user1.email, user1.pw).then((response)=>
            {
                    if(response.data.success)
                    {
                        localStorage.setItem('user_id',response.data.user._id);
                        localStorage.setItem('email',response.data.user.email);
                        localStorage.setItem('role','rest');
                        navigate("/resturantDashboard" );
                        console.log(response)
                    }
                    else{
                        console.log("here")
                    }
        
            })
            .catch((err)=>
            {
                console.log(err);
            })
        
        }

        if(prop.user === 3){
            ngoLogin(user1.email, user1.pw).then((response)=>
            {
                    if(response.data.success)
                    {
                        localStorage.setItem('user_id',response.data.user._id);
                        localStorage.setItem('email',response.data.user.email);
                        localStorage.setItem('role','rest');
                        navigate("/resturantDashboard" );
                        console.log(response)
                    }
                    else{
                        console.log("here")
                    }
        
            })
            .catch((err)=>
            {
                console.log(err);
            })
        
        }
}
    return (
    <div className ="form">
    <form action="/">
    <input type = "email" placeholder = "Email" className="input1" name ="email" value={user1.email} onChange = {handleForm1}/>
    <p>&nbsp;</p>
    <input type = "password" placeholder = "Password" className="input1" name ="pw" value={user1.pw} onChange = {handleForm1}/>
    <div className="forgetPass">
        <a href='#'> Forget Password ? </a>
    </div>
    <button className = "sign-in" type = "submit" onClick = {onLogin}> SIGN IN</button>
    <div className='signup'>
        <p>Dont have an account ?  <a href='#'> Sign Up </a> </p>
    </div>
    <div className="admin-login">
        <p>Do you want to sign in as Admin ? <button className="adminmodel">Admin</button> </p>
    </div>
    </form>
    </div>
);}
export default LoginForm;