import './forgetpassword.css'
import TabBar from '../../components/TabBar/TabBar.jsx';
import Forms from '../../components/Forms/forms.jsx';
import FormsDonation from '../../components/Forms/formsDonation';
import FormsProfile from '../../components/Forms/formsProfile';

function forgetPass ()
{
    return (
        <div className='hello'>   
        <div class="TabbarDiv">
        <h3>Sign Up</h3>
        <p>Select whom you want to Sign in as:</p>
        <TabBar className = "mazaydar" itemOne={"User"} itemTwo={"Restuarant"} itemThree={"NGO"} Restuarant={false}/>
        </div>
        <div className='mazay'>
            <FormsProfile User={3}/>
        </div>
        </div>
    );
}

export default forgetPass;