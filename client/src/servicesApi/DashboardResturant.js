import axios from 'axios';

const Url = "http://localhost:8080/api/v1/rest/";

export const myRequests  = async (email) =>{

    let obj = {
        email:email
    }
    return await axios.post(`${Url}/myRequest`,obj);
}
