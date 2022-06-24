import axios from 'axios';

const Url = "http://localhost:8080/api/v1/user";
axios.defaults.withCredentials=true;
export const myRequestsUser  = async (email) =>{

    let obj = {
        email:email
    }
    return await axios.post(`${Url}/myRequest`,obj);
}
export const myProfile = async (email) =>
{
    let obj = {
        email:email
    }
    return await axios.post(`${Url}/viewProfile`,obj);
}

