import React,{useState} from 'react';
import { AppBar,Toolbar,Box} from '@mui/material';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import SignOutModals from '../Modals/SignOutModal';

function Navbar(props) {
    const navigation = useNavigate();
    const [button,setbuttonState] = useState({
        button1:true,
        button2:false
    });
    const [modalState,setModalState] = useState(false)
    const HandleClick = (props,e)=>{
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
        setbuttonState(obj);
        RedirectClick(props,e);
    }

    function onClick2 (){

        navigation("/");

    }

    function openModal (){
        setModalState(true);
    }

    function handleClose(reason)
    {
    if (reason !== "backdropClick")
    {
        return 
    }
    setModalState(false);
    }

    function onClick()
    {
    setModalState(false);
    }

    const RedirectClick = (props,e) => {
        if (e.target.value === "Home"){
            if (props.User === 0){
                navigation ('/userdashboard')
            }
            else if (props.User === 1){
                navigation ('/resturantDashboard')
            }
            else if (props.User === 2){
                navigation ('/ngodashboard')
            }
            else if (props.User === 3){
                navigation ('/adminDashboard')
            }
        }
        else if (e.target.value === "Profile"){
            console.log("here")
            if (props.User === 0){
                navigation ('/userprofile')
            }
            else if (props.User === 1){
                navigation ('/resprofile')
            }
            else if (props.User === 2){
                navigation ('/ngoprofile')
            }
        }
    }
return (
        <AppBar position={"static"} sx={{flexGrow:1, background:'transparent',width:"100%",alignContent:"right",alignItems:"right"}} elevation={0}>
            <SignOutModals state={modalState} modelMsg = {"Are you sure you want to sign out?" } actionMsg={"Cancel"} actionMsg2={"Sign Out"} handleClose = {handleClose} onClick = {onClick} onClick2={onClick2}/>
            <Toolbar sx={{justifyContent:"right",alignItems:"right"}}>
                    <Box sx={{justifyContent:"right",alignItems:"right"}}>
                    <button onClick = {(e) => HandleClick(props,e)} className = {"buttons1"+(button.button1?" orangeColor":" greenColor")} value="Home">Home</button>
                    <button onClick = {(e) => HandleClick(props,e)} className = {"buttons1"+(button.button2?" orangeColor":" greenColor")} value="Profile">Profile</button>
                    <button onClick = {openModal} className="buttons2" type="submit">Sign Out</button>
                    </Box>
            </Toolbar>
        </AppBar>
)
}

export default Navbar;