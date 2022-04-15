import './donationForms.css';
import TabBar from '../../components/TabBar/TabBar.jsx';
import NavBar from '../../components/Navbar/Navbar.jsx';
import DForms from '../../components/Forms/formsDonation.jsx';
import DImage from './Group-6952.png';
import ResImage from './Mask_Group_620.png';
import React from 'react';
import { useState } from 'react';

function DonationForms (props)
{
    const [selectedID,setID] = useState(1);
    function GetSelectID(Id)
    {
        setID(Id+1);
        

    }
    console.log(props.Resturant)
    return (
        <div className={"parentdiv"+(props.Resturant?" restaurantback":" userback")}>
            <NavBar />
            <div className="Fheading">
                <h3>Make a Donation</h3>
            </div>
            <div className= "Fparagraph">
                <p>select what type of donation you want to make</p>
            </div>
            <div className="tabbardiv">
               {!props.Resturant && <TabBar itemOne = {"Monetary"} itemTwo = {"Ration"} itemThree = {"Meals"} getId={GetSelectID}/>}
               {props.Resturant && <TabBar itemOne = {"Meals"} Restuarant={true} getId={GetSelectID}/>}

            </div>
            <div className = "formDiv">
                {!props.Resturant && <DForms User={selectedID} />}
                {props.Resturant && <DForms User = {3}/>}
            </div>
            <div className="img-div">
                {!props.Resturant && <img className="imgClass" src={DImage}/>}
                {props.Resturant && <img className="imgClass" src={ResImage}/>}
            </div>
        </div>
    );
}

export default DonationForms;