import axios from 'axios';

const Url = "http://localhost:8080/api/v1/admin";

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
