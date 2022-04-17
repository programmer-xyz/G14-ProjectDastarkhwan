import React from 'react';
import { Route, Navigate,Routes} from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';

export default function PrivateRoute(props) {   
     let session_token=localStorage.getItem('token');
    //let navigate = useNavigate();
    //const { user, isLoading } = useContext(UserContext); 
   

    const { component: Component,
        ...rest } = props;

    
      if(session_token!==null){
        return ( 
      
        <Route {...rest} render={(props) => (<Component {...props}/>)}/>
 
        )
        } else {
          return <Navigate to='/'/> 
        }

}


