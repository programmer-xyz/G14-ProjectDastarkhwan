import axios from 'axios';

const Url = "http://localhost:8080/api/v1/user";

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

export const changeProfile = async (name, userName, phoneNumber, cnic, description, address, _id) =>
{
    let obj = {
        name:name, userName:userName, phoneNumber:phoneNumber, cnic:cnic,description:description,address:address, _id:_id
    }
    return await axios.post(`${Url}/editProfileUser`,obj);
}

