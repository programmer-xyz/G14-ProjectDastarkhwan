import './donationForms.css';
import TabBar from '../../components/TabBar/TabBar.jsx';
import NavBar from '../../components/Navbar/Navbar.jsx';
import DForms from '../../components/Forms/formsDonation.jsx';
import DImage from './Group-6952.png';

function DonationForms ()
{
    return (
        <div className="parentdiv">
            <NavBar />
            <div className="Fheading">
                <h3>Make a Donation</h3>
            </div>
            <div className= "Fparagraph">
                <p>select what type of donation you want to make</p>
            </div>
            <div className="tabbardiv">
                <TabBar itemOne = {"Monetary"} itemTwo = {"Ration"} itemThree = {"Meals"} />

            </div>
            <div className = "formDiv">
                <DForms User={1} />
            </div>
            <div className="img-div">
                <img className="imgClass" src={DImage}/>
            </div>
        </div>
    );
}

export default DonationForms;