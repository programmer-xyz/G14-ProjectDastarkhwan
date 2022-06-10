import './donationForms.css';
import TabBar from '../../components/TabBar/TabBar.jsx';
import NavBar from '../../components/Navbar/Navbar.jsx';
import DForms from '../../components/Forms/formsDonation.jsx';
import DImage from './Group-6952.png';
import ResImage from './Mask_Group_620.png';
import React from 'react';
import { useState } from 'react';
import Modals from '../../components/Modals/Modals.jsx';
import { useNavigate } from "react-router-dom";
import Rationpic from '../../assets/Rationpic.png';

function DonationForms (props)
{
    let naviagte = useNavigate();
    const [modelMsg,setModalMsg] = useState("");
    const [modalState,setModalState] = useState(false);
    const [modalSucces,setSucces] = useState(false);
    const [modalactionMsg,setactionMsg] = useState('');
    const[modalroute,setroute] = useState('');
    const [selectedID,setID] = useState(1);

    function GetSelectID(Id)
    {
        setID(Id+1);
        

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
    naviagte(`/${modalroute}`)

    }
    function getStates(modelMsg,state,success,actionMsg,route)
    {
       setModalMsg(modelMsg);
       setSucces(success);
       setactionMsg(actionMsg);
       setroute(route);
       setModalState(state);
    }
    console.log(props.Resturant)
    return (
        <div className={"parentdiv"+(props.Resturant?" restaurantback":" userback")}>
            <Modals modelMsg={modelMsg} state={modalState} success={modalSucces} actionMsg={modalactionMsg} onClick={onClick} handleClose={handleClose} />
            <NavBar setUserType={props.setUserType}/>
            <div className="Fheading">
                <h3>Make a Donation</h3>
            </div>
            <div className= "Fparagraph">
                <p>Choose what type of donation you want to make</p>
            </div>
            <div className="tabbardiv">
               {!props.Resturant && <TabBar itemOne = {"Monetary"} itemTwo = {"Ration"} itemThree = {"Meals"} getId={GetSelectID}/>}
               {props.Resturant && <TabBar itemOne = {"Meals"} Restuarant={true} getId={GetSelectID}/>}

            </div>
            <div className = "formDiv">
                {!props.Resturant && <DForms User={selectedID} getS={getStates} />}
                {props.Resturant && <DForms User = {3} getS={getStates}/>}
            </div>
            <div className="img-div">
                {!props.Resturant && selectedID ===1 && <img className="imgClass" src={DImage} alt="Dimage"/>}
                {!props.Resturant && selectedID ===2 && <img className="imgClass" src={Rationpic} alt="rationpic"/>}
                {!props.Resturant && selectedID ===3 && <img className="imgClass" src={ResImage} alt="resimage"/>}
                {props.Resturant && <img className="imgClass" src={ResImage}/>}
            </div>
        </div>
       
        
    );
}

export default DonationForms;