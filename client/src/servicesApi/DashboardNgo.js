import axios from 'axios';

const Url = "http://localhost:8080/api/v1/ngo";

export const myRequests  = async (email) =>{

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

export const acceptDonation = async (id) =>
{
    let obj = {
        donationId:id
    }
    return await axios.post(`${Url}/acceptDonation`,obj);
}

export const changeNGOProfile = async (name,userName, accountNum, phoneNumber, description, address, _id,  contactName, contactEmail, contactNumber) =>
{
    let obj = {
        name:name, userName:userName, accountNum:accountNum,phoneNumber:phoneNumber,description:description,address:address, _id:_id, contactName: contactName,
        contactEmail: contactEmail, contactNumber:contactNumber
    }
    return await axios.post(`${Url}/editProfileNgo`,obj);
}
