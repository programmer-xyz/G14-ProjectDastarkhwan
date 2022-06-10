import './formslogin.css';

function ForgotForm(){
    return (
    <div className ="form">
    <form action="/">
    <input type = "email" placeholder = "Email" className="input1"/>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <button className = "sign-in" type = "submit">Submit</button>
    </form>
    </div>
);
}
export default ForgotForm;