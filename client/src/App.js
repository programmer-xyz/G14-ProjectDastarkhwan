import './App.css';
function App() {
  return (
    <div className = "body">
      <div className = "left-container">
        <div className = "btn-box">
          <button id = "btn1">User</button>
          <button id = "btn2">Restaurant</button>
          <button id = "btn3">NGO</button>
        </div>
        <div id = "content1" className ="content">
          <form>
          <input type = "text" placeholder = "Email"/>
          <p>&nbsp;</p>
          <input type = "text" placeholder = "Password"/>
          <p>&nbsp;</p>
          <button className = "sign-in" type = "submit"> SIGN IN</button>
          </form>
        </div>
      </div>
      <div className = "right-container"></div>
      <script src = "loginScript.js"></script>
    </div>
  );
}
export default App;
