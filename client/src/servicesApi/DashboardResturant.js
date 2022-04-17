import axios from 'axios';

const Url = "http://localhost:8080/api/v1/rest";

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

export const changeResProfile = async (name, userName, phoneNumber, description, address, _id, contactName, contactEmail, contactNumber) =>
{
    let obj = {
        name:name, userName:userName, phoneNumber:phoneNumber,description:description,address:address, _id:_id, contactName: contactName,
        contactEmail: contactEmail, contactNumber:contactNumber
    }
    return await axios.post(`${Url}/editProfileRest`,obj);
}

