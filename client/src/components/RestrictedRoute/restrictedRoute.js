import React from 'react';
import { Route, Navigate} from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';

export default function PrivateRoute( props) {   
    let isLogged = false;
    //let navigate = useNavigate();
    //const { user, isLoading } = useContext(UserContext); 
    console.log(isLogged);

    const { component: Component,
        ...rest } = props;

    
      if(isLogged === true){
        return ( <Route {...rest} render={(props) => (<Component {...props}/>)}/>)
        } else {
          return <Navigate to='/'/> 
        }

}


