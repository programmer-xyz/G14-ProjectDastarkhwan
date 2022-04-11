import './forgetpassword.css'
import TabBar from 'C:/SpringSemester/SE/SE_Proj/G14-ProjectDastarkhwan/client/src/components/TabBar/TabBar.jsx';
import Forms from 'C:/SpringSemester/SE/SE_Proj/G14-ProjectDastarkhwan/client/src/components/Forms/forms.jsx';

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
            <Forms User={1}/>
        </div>
        </div>
    );
}

export default forgetPass;