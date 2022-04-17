import './signup.css'
import TabBar from '../../components/TabBar/TabBar.jsx';
import Forms from '../../components/Forms/forms.jsx';
import {useState} from 'react';
import React from 'react';
import Snackbar from '../../components/SnackBar/SnackBar.jsx';


export default function Signup ()
{
    const [selectedID,setID] = useState(1);
    const [selectMsg,setMsg] = useState('');
    const [selectSeverity,setSeverity] = useState('');
    const [selectState,setState] = useState(false);

    function onClose()
    {
        setState(false);
    }
    function GetSelectID(Id)
    {
        setID(Id+1);
        

    }
    function getStates(msg,sv,state)
    {
        setMsg(msg)
        setSeverity(sv)
        setState(state)
    }
    const handleChange= e =>{
    
        console.log("here in handleChange", e.target.value)
    }
    return (
        <div className='hello'>   
        <div class="TabbarDiv">
        <h3>Sign Up</h3>
        </div>
        <div class="paragDiv">
        <p>Choose who you want to sign up as: </p>
        </div>
        <div className='mazaydar'>
        <TabBar onChange={(e)=>{handleChange(e)}} itemOne={"User"} itemTwo={"Restuarant"} itemThree={"NGO"} Restuarant={false} getId={GetSelectID}/>
        </div>
        <div className='firstdiv'>
        <Forms User={selectedID} getState={getStates}/>
        </div> 
        <Snackbar onClosed={onClose} message={selectMsg} severity={selectSeverity} state={selectState}/>
        </div>
    );
}