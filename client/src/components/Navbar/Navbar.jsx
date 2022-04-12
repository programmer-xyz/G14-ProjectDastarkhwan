import React,{useState} from 'react';
import { AppBar,Tabs,Toolbar} from '@mui/material';
import './Navbar.css'

function Navbar() {
    const [button,setbuttonState] = useState({
        button1:true,
        button2:false
    });
    function handleClick(e){
        var obj = {}
        if(e.target.value === "Home")
        {
            obj = {
                button1:true,
                button2:false
            }

        }
        else if (e.target.value ==="Profile")
        {
            obj = {
                button1:false,
                button2:true
            }
        }
        console.log("this is button",obj)
        setbuttonState(obj)
    }
return (
    <React.Fragment>
        <AppBar sx={{background:'transparent', position: 'static'}} elevation={0}>
            <Toolbar>
                <Tabs sx={{marginLeft:'auto'}}>
                    {console.log(button)}
                    <button onClick={(e)=>{handleClick(e)}} className = {"buttons1"+(button.button1?" orangeColor":" greenColor")} value="Home">Home</button>
                    <button onClick={(e)=>{handleClick(e)}} className = {"buttons1"+(button.button2?" orangeColor":" greenColor")} value="Profile">Profile</button>
                </Tabs>
                <button className="buttons2" type="submit">Sign Out</button>
            </Toolbar>
        </AppBar>
    </React.Fragment>
)
}

export default Navbar;