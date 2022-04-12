import './login.css';
import React,{ useState} from 'react';
import Grid from '@mui/material/Grid';
import logo from '../../assets/MaskGroup2.png';
import TabBar from '../../components/TabBar/TabBar.jsx';
import LoginForm from '../../components/Forms/formslogin';

function Button (props) {  
  console.log(props.orange)
  return (
    
    <button onClick={()=>{props.onClick()}} id= {"btn"+props.number} className ={props.orange?"Orangebutton":"greyButton"}>{props.title}</button>
    );
}
function Login (){
  const [buttons,setbuttons] = useState({
    button1:true,
    button2:false,
    button3:false
  });
  const handleClick = (i) =>{

    
    console.log(buttons)
    console.log("This is the value of i passsed into the function",i)
    if (i===0)
    {
      let obj = {
        button1:true,
        button2:false,
        button3:false
      }
      console.log("here in if 0")
      setbuttons(obj)

    }
    else if ( i === 1)
    {
      let obj = {
        button1:false,
        button2:true,
        button3:false
      }
      console.log("here in if 1")
      setbuttons(obj)
    }
    else if (i === 2)
    {
      let obj = {
        button1:false,
        button2:false,
        button3:true
      }
      console.log("here in if 2")
      setbuttons(obj)
    }
  }
  const renderButton = (i,role) =>
  {
    if (i === 0)
    {
      console.log("Here in first if")
      return <Button onClick= {()=>{handleClick(i)}} number={i} title={role} orange = {buttons.button1}/>
    }
    else if (i===1)
    {
      console.log("Here in second if")
      return <Button onClick= {()=>{handleClick(i)}} number={i} title={role} orange = {buttons.button2}/>
    }
    else if (i===2)
    {
      console.log("Here in third if")
      return <Button onClick= {()=>{handleClick(i)}} number={i} title={role} orange = {buttons.button3}/>
    }

  }  
 
  return (
   
    // <div className = "body">
    // <Grid>
    // <Grid item lg={6} md={6} xs={6}>
    //   <div className = "left-container">
    //   <h3 className="heading">Sign In</h3>
    //   <p className="paragraph">Select whom you want to sign in as :</p>
    //     <div className = "btn-box">
    //       {renderButton(0,"User")}
    //       {renderButton(1,"Restaurant")}
    //       {renderButton(2,"NGO")}
    //     </div>
        // <div id = "content1" className ="content">
        //   <form action="/">
        //   <input type = "email" placeholder = "Email"/>
        //   <p>&nbsp;</p>
        //   <input type = "password" placeholder = "Password"/>
        //   <p>&nbsp;</p>
        //   <button className = "sign-in" type = "submit"> SIGN IN</button>
        //   </form>
        // </div>
    //   </div>
    //   </Grid>
    //   <Grid item lg={6} md={6} xs={0}>
    //   <div className = "right-container"> 
    //   <h2 className="heading1">United, we can end hunger! </h2>
    //   <p className="paragraph1">Your every donation counts!</p>
    //   <img className="image" src={logo} alt="Logo"/>
    //   </div>
    //   </Grid>
    //   </Grid>
    // </div>
    <div className="loginbody">
    <div className="left-container">
    <div className="left-div">
    <div className='headingL'>
    <h3 >Sign Up</h3>
    </div>
    <div className="paragraphL">
      <p>Select whom you want to sign in as: </p>
    </div>
    <div className="tab-bar">
      <TabBar itemOne = {"User"} itemTwo = {"Restuarant"} itemThree = {"NGO"}/>
    </div>
    <div className="forgetPass">
      <a href='#'> Forget Password ? </a>
    </div>
    <div className="Loginform">
        <LoginForm />
    </div>
    <div className='signup'>
      <p>Dont have an account ?</p>
      <a href='#'> Sign Up </a>
    </div>
    <div className="admin-login">
      <p>Do you want to sign in as Admin ?</p>
      <button className="adminmodel">Admin</button>
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
