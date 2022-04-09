import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from './pages/loginpage/login.js';
//import pages here and call then the way login has been called


const App = () => {

    return(
        <Router>
            <div className="App">
                <Routes> 
                    <Route path='/' element={<Login/>}/>
                  
                </Routes>
            </div>

         </Router>
    );

}


export default App