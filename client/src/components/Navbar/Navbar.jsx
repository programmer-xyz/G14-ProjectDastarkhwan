import React,{useState} from 'react';
import { AppBar,Toolbar,Box} from '@mui/material';
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
        <AppBar sx={{flexGrow:0, background:'transparent',postion:"static",width:"100%",alignContent:"right",alignItems:"right"}} elevation={0}>
            <Toolbar sx={{justifyContent:"right",alignItems:"right"}}>
                
                    <Box sx={{justifyContent:"right",alignItems:"right"}}>
                    <button onClick={(e)=>{handleClick(e)}} className = {"buttons1"+(button.button1?" orangeColor":" greenColor")} value="Home">Home</button>
                    <button onClick={(e)=>{handleClick(e)}} className = {"buttons1"+(button.button2?" orangeColor":" greenColor")} value="Profile">Profile</button>
                    <button className="buttons2" type="submit">Sign Out</button>
                    </Box>
                
                
            </Toolbar>
        </AppBar>
)
}

export default Navbar;