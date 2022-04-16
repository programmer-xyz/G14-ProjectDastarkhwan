import axios from 'axios';

const Url = "http://localhost:8080/api/v1/user/";

export const myRequestsUser  = async (email) =>{

    let obj = {
        email:email
    }
    return await axios.post(`${Url}/myRequest`,obj);
}

