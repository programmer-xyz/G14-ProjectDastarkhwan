import './donationForms.css';
import TabBar from '../../components/TabBar/TabBar.jsx';
import NavBar from '../../components/Navbar/Navbar.jsx';
import DForms from '../../components/Forms/formsDonation.jsx';
import DImage from './Group-6952.png';

function DonationForms (props)
{
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
               {!props.Resturant && <TabBar itemOne = {"Monetary"} itemTwo = {"Ration"} itemThree = {"Meals"} />}
               {props.Resturant && <TabBar itemOne = {"Meals"} Restuarant={true}/>}

            </div>
            <div className = "formDiv">
                {!props.Resturant && <DForms User={props.Number} />}
                {props.Resturant && <DForms User = {3}/>}
            </div>
            <div className="img-div">
                <img className="imgClass" src={DImage}/>
            </div>
        </div>
    );
}

export default DonationForms;