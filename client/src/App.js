import './App.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import logo from './MaskGroup2.png'

class Button extends React.Component {
  
  constructor(props)
  {
    super(props)
    this.state = {
      orange:null
    }
  }
  
  render(){
    return (
     
      <button onClick={()=>{this.props.onClick()}} id= {"btn"+this.props.number} className ={this.props.orange?"Orangebutton":"greyButton"}>{this.props.title}</button>
      );
  }
}
class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      buttons: [true,false,false]
    }
    console.log("This is the state",this.state.buttons)
  }
  handleClick(i){
    let btncopy = this.state.buttons.splice()
    console.log("This is btncopy",btncopy)
    btncopy[i] = true
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
    console.log(btncopy)
    this.setState({buttons:btncopy})
  }
  renderButton (i,role)
  {
    return <Button onClick={()=>{this.handleClick(i)}}  orange={this.state.buttons[i]} number = {i} title={role}/>
  }
  render()
  {
    return (
      <div className = "body">
      <Grid>
      <Grid item lg={6} md={6} xs={6}>
        <div className = "left-container">
        <h3 className="heading">Sign In</h3>
        <p className="paragraph">Select whom you want to sign in as :</p>
          <div className = "btn-box">
            {this.renderButton(0,"User")}
            {this.renderButton(1,"Restaurant")}
            {this.renderButton(2,"NGO")}
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
        <Grid item lg={6} md={6} xs={6}>
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
}
// function App() {
//     return (
//       <loginS />
//     );
// }
export default App;
