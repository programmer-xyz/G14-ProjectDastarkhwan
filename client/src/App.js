import './App.css';
import React,{ useState} from 'react';
import Grid from '@mui/material/Grid';
import logo from './MaskGroup2.png'
// import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';

function Button (props) {  
  console.log(props.orange)
  return (
    
    <button onClick={()=>{props.onClick()}} id= {"btn"+props.number} className ={props.orange?"Orangebutton":"greyButton"}>{props.title}</button>
    );
}
function App (){
  const [buttons,setbuttons] = useState([true,false,false]);

  const handleClick = (i) =>{ 
    let btncopy = buttons;
    console.log(i)
    console.log("This is btncopy",btncopy)
    btncopy[i] = true
    console.log("This is button copy after the assingment",btncopy)
    for (var j=0;j<btncopy.length;j++)
    {
      if (j === i)
      {
        btncopy[j] = true
      } 
      else
      {
        btncopy[j]= false;
      }
    }
    console.log("This is button copy after for loop",btncopy)
    setbuttons(btncopy);
  }
  const renderButton = (i,role) =>
  {
    return <Button onClick= {()=>{handleClick(i)}} number={i} title={role} orange = {buttons[i]}/>
  }
 
  return (
    <div className = "body">
    <Grid>
    <Grid item lg={6} md={6} xs={6}>
      <div className = "left-container">
      <h3 className="heading">Sign In</h3>
      <p className="paragraph">Select whom you want to sign in as :</p>
        <div className = "btn-box">
          {renderButton(0,"User")}
          {renderButton(1,"Restaurant")}
          {renderButton(2,"NGO")}
        </div>
        <div id = "content1" className ="content">
          <form action="/">
          <input type = "text" placeholder = "Email"/>
          <p>&nbsp;</p>
          <input type = "text" placeholder = "Password"/>
          <p>&nbsp;</p>
          <button className = "sign-in" type = "submit"> SIGN IN</button>
          </form>
        </div>
      </div>
      </Grid>
      <Grid item lg={6} md={6} xs={0}>
      <div className = "right-container"> 
      <h2 className="heading1">United, we can end hunger! </h2>
      <p className="paragraph1">Your every donation counts!</p>
      <img className="image" src={logo} alt="Logo"/>
      </div>
      </Grid>
      </Grid>
    </div>
  );

  
}

export default App;
