import axios from 'axios';

const Url = "http://128.199.77.9/api/v1/ngo/";

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
