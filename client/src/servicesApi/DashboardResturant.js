import axios from 'axios';

const Url = "http://localhost:8080/api/v1/rest";
axios.defaults.withCredentials=true;
export const myRequests  = async (email) =>{

    let obj = {
        email:email
    }
    return await axios.post(`${Url}/myRequest`,obj);
}

export const myStats = async (email) =>
{
    let obj = {
        email:email
    }
    return await axios.post(`${Url}/statProfile`,obj);
    
}
export const myProfile = async (email) =>
{
    let obj = {
        email:email
    }
    return await axios.post(`${Url}/viewProfile`,obj);
}

