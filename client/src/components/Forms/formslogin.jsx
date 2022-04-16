import './formslogin.css';

function LoginForm(){
    return (
    <div className ="form">
    <form action="/">
    <input type = "email" placeholder = "Email" className="input1"/>
    <p>&nbsp;</p>
    <input type = "password" placeholder = "Password" className="input1"/>
    <div className="forgetPass">
        <a href='#'> Forget Password ? </a>
    </div>
    <button className = "sign-in" type = "submit"> SIGN IN</button>
    <div className='signup'>
        <p>Dont have an account ?  <a href='#'> Sign Up </a> </p>
    </div>
    <div className="admin-login">
        <p>Do you want to sign in as Admin ? <button className="adminmodel">Admin</button> </p>
    </div>
    </form>
    </div>
);
}
export default LoginForm;