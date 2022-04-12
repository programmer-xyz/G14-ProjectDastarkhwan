import './signup.css'
import TabBar from '../../components/TabBar/TabBar.jsx';
import Forms from '../../components/Forms/forms.jsx';

function forgetPass ()
{
    const handleChange= e =>{
    
        console.log("here in handleChange", e.target.value)
    }
    return (
        <div className='hello'>   
        <div class="TabbarDiv">
        <h3>Sign Up</h3>
        </div>
        <div class="paragDiv">
        <p>Select whom you want to Sign in as:</p>
        </div>
        <div className='mazaydar'>
        <TabBar onChange={(e)=>{handleChange(e)}} itemOne={"User"} itemTwo={"Restuarant"} itemThree={"NGO"} Restuarant={false}/>
        </div>
        <div className='firstdiv'>
        <Forms User={3}/>
        </div>  
        </div>
    );
}

export default forgetPass;