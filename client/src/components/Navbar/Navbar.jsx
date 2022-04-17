import React,{useState} from 'react';
import { AppBar,Toolbar,Box} from '@mui/material';
import './Navbar.css'
import {useNavigate} from 'react-router-dom';

function Navbar() {

    let navigate = useNavigate();
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
    const Logout2 = () =>
    {
        localStorage.removeItem('user_id');
        localStorage.removeItem('email');
        localStorage.removeItem('role');
        navigate("/");
    
    }
return (
        <AppBar position={"static"} sx={{flexGrow:1, background:'transparent',width:"100%",alignContent:"right",alignItems:"right"}} elevation={0}>
            <Toolbar sx={{justifyContent:"right",alignItems:"right"}}>
                
                    <Box sx={{justifyContent:"right",alignItems:"right"}}>
                    <button onClick={(e)=>{handleClick(e)}} className = {"buttons1"+(button.button1?" orangeColor":" greenColor")} value="Home">Home</button>
                    <button onClick={(e)=>{handleClick(e)}} className = {"buttons1"+(button.button2?" orangeColor":" greenColor")} value="Profile">Profile</button>
                    <button className="buttons2" type="submit" onClick={Logout2}>Sign Out</button>
                    </Box>
                
                
            </Toolbar>
        </AppBar>
)
}

export default Navbar;