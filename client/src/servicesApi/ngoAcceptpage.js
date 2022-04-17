import axios from 'axios';


const Url = "http://localhost:8080/api/v1/ngo/";

export const viewReqNgo = async (email) =>{

    let obj = {
        email:email
    }
    return await axios.post(`${Url}/myRequest`,obj);


}

export const viewReqNgoRes = async (email) =>{

    let obj = {
        email:email
    }
    return await axios.post(`${Url}/myRequest/rest`,obj);


}
export const viewReqNgoUser = async (email) =>{

    let obj = {
        email:email
    }
    return await axios.post(`${Url}/myRequest/user`,obj);

}