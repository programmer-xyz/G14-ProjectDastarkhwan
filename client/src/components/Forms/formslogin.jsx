import './formslogin.css';

function LoginForm(){
    return (
    <div className ="form">
    <form action="/">
    <input type = "email" placeholder = "Email" className="input1"/>
    <p>&nbsp;</p>
    <input type = "password" placeholder = "Password" className="input1"/>
    <p>&nbsp;</p>
    <button className = "sign-in" type = "submit"> SIGN IN</button>
    </form>
    </div>
);
}
export default LoginForm;