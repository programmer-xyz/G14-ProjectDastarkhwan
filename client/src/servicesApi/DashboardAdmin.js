import axios from 'axios';

const Url = "http://128.199.77.9/api/v1/admin";

export const acceptApplication =  async (email) =>{
    const obj = {

    "email":email, 
    
}
    return await axios.post(`${Url}/approve`,obj);
}

export const rejectApplication =  async (email) =>{
    const obj = {

    "email":email, 
    
}
    return await axios.post(`${Url}/reject`,obj);
}
