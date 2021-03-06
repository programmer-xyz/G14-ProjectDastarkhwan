import './formslogin.css';
import { useState } from 'react';
import {userLogin, ngoLogin , restLogin ,adminLoginform} from '../../servicesApi/authenticationApi';
import {useNavigate} from 'react-router-dom';

const user1Init ={

    email:"",
    pw:"",

};
const adminInit = {
    username:"",
    pw:"",
}

function LoginForm(prop){
    let navigate = useNavigate();
    const [user1, setUser1] = useState(user1Init);
    const [admin,setadmin] = useState(adminInit);

    const handleForm1 = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setUser1({...user1, [name]: value});
    
    }
    const handleForm2 = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setadmin({...admin, [name]: value});
    
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
                        localStorage.setItem('token',response.data.token);
                        prop.setUserType('user')
                        navigate("/userdashboard" );
                        console.log(response);
                    }
                    else{
                        console.log("here")
                    }
        
            })
            .catch((err)=>
            {
             
                alert('There is an error while logging in please try again');
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
                        localStorage.setItem('token',response.data.token);
                        prop.setUserType('rest')
                        navigate("/resturantDashboard" );
                        console.log(response)
                    }
                    else{
                        console.log("here")
                    }
        
            })
            .catch((err)=>
            {
               
                alert('There is an error while logging in please try again');
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
                        localStorage.setItem('role','ngo');
                        localStorage.setItem('token',response.data.token);
                        prop.setUserType('ngo')
                        navigate("/ngoDashboard");
                        console.log(response)
                    }
                    else{
                        console.log("here")
                        navigate("/");
                    }
        
            })
            .catch((err)=>
            {
                alert('There is an error while logging in please try again');
              
                console.log(err);
            })
        }
        if (prop.user === 4)
        {
            adminLoginform(admin.username,admin.pw).then((response)=>{
                if(response.data.success)
                {
                    localStorage.setItem('user_id',response.data.user._id);
                    localStorage.setItem('email',response.data.user.userName);
                    localStorage.setItem('role','admin');
                    prop.setUserType('admin')
                    navigate("/adminDashboard");
                }
                else
                {
                    navigate("/")
                }
            }).catch((err)=>{
                console.log("Error in logging admin",err);
            })

        }
        
    }
    if (prop.isAdmin === true)
    {
        return (
            <div className ="form">
            <form action="/">
            <input type = "email" placeholder = "Username" className="input1" name ="username" value={admin.username} onChange = {handleForm2}/>
            <p>&nbsp;</p>
            <input type = "password" placeholder = "Password" className="input1" name ="pw" value={admin.pw} onChange = {handleForm2}/>
            <p>&nbsp;</p>
            <button className = "sign-in" type = "submit" onClick = {onLogin}> SIGN IN</button>
            </form>
            </div>
        );
    }
    else if (prop.isAdmin === false)
    {
        return (
            <div className ="form">
            <form action="/">
            <input type = "email" placeholder = "Email" className="input1" name ="email" value={user1.email} onChange = {handleForm1}/>
            <p>&nbsp;</p>
            <input type = "password" placeholder = "Password" className="input1" name ="pw" value={user1.pw} onChange = {handleForm1}/>
            <div className="forgetPass">
                <a href='/forgotpassword'> Forget Password ? </a>
            </div>
            <button className = "sign-in" type = "submit" onClick = {onLogin}> SIGN IN</button>
            <div className='signup'>
                <p>Dont have an account ?  <a href='/Signup'> Sign Up </a> </p>
            </div>
            <div className="admin-login">
            <p>Do you want to sign in as Admin ? <button  className="adminmodel" onClick = {()=>{navigate('/adminlogin')}}>Admin</button> </p>
            </div>
            </form>
            </div>
        )

    }
    
;}
export default LoginForm;