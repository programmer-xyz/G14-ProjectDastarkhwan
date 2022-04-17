import { useState, useEffect } from 'react';

import {checkLoggedIn} from "../servicesApi/authenticationApi";
import { useNavigate } from 'react-router-dom';

// export function UseLoginUser(role) {
//     let navigate = useNavigate();

//    const [user, setUser] = useState(null);

//    const [initial, setInitial] = useState(true);

//     useEffect(() => {
//     async function findLoggedinUser() {

//             checkLoggedIn().then(res => {

//             setUser(res.data.user);
//             setInitial(false);

//         }).catch(err => {

//             setInitial(false);
//         });
//     }

//     findLoggedinUser();

//     }, []);
//     return {
//         user,
//         initial
//     }
// }



// export function UseLoginUser(role) {
//     let navigate = useNavigate();

//    const [user, setUser] = useState(false);

//     useEffect(() => {
//     async function findLoggedinUser() {

//             checkLoggedIn(role).then(res => {

//                 if(res.data.login ===false){
//                     navigate("/");
//                 }

//             setUser(res.data.login)
          

//         }).catch(err => {

//             console.log(err);
//         });
//     }

//     findLoggedinUser();

//     }, []);
//     return {
//        user
//     }
// }


export function UseLoginUser() {
    let navigate = useNavigate();

   const [user, setUser] = useState(false);
   const [userData, setUserData] = useState(null);
    useEffect(() => {
    async function findLoggedinUser() {

            checkLoggedIn().then(res => {

                if(res.data.login ===false){
                    navigate("/");
                }

            setUser(res.data.login)
        

        }).catch(err => {

            console.log(err);
        });
    }

    findLoggedinUser();

    }, []);
    return {
       user
    }
}