import './login.css';
import React,{ useState} from 'react';
import logo from '../../assets/MaskGroup2.png';
import TabBar from '../../components/TabBar/TabBar.jsx';


function Login (){
  const [buttons,setbuttons] = useState({
    button1:true,
    button2:false,
    button3:false
  });
    
  return (
   
 
      <div className= "wrapper">
        <div className = "main-container left-box">
              <h3 className="heading">Sign In</h3>
              <p className="paragraph">Select whom you want to sign in as :</p>

              <div className='tabbar'>
                <TabBar itemOne={"User"} itemTwo={"Restaurant"} itemThree={"NGO"} Restuarant={false}/>
              </div>

                <div id = "content1" className ="content">
                  <form action="/">
                  <input type = "email" placeholder = "Email"/>
                  <p>&nbsp;</p>
                  <input type = "password" placeholder = "Password"/>
                  <p>&nbsp;</p>
                  <button className = "sign-in" type = "submit"> SIGN IN</button>
                  <p className="bottom-text">Don't have an account? <l className="lin">Sign Up</l></p> 
               
                  </form>
                </div>
        </div>
    
      
        <div className = "main-container right-box"> 
              <h2 className="heading1">United, we can end hunger! </h2>
              <p className="paragraph1">Your every donation counts!</p>
              <img className="image" src={logo} alt="Logo"/>
        </div>
    
      </div>
  

  );
  
}

export default Login;
