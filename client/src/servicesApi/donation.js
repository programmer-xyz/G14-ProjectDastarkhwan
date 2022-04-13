import axios from 'axios';

const Url = "http://localhost:8080/api/v1";

export const mealDonationUser =  async (address, description, email, ngoIdentifier, image) =>{
    const obj = {

    "email":email, 
    "description":description,
    "ngoIdentifier": ngoIdentifier,
    "image":image,
    "address":address 

}

    return await axios.post(`${Url}/user/mealDonation`,obj);
}

export const rationDonationUser =  async (address, description, email, ngoIdentifier, image) =>{
    const obj = {

    "email":email, 
    "description":description,
    "ngoIdentifier": ngoIdentifier,
    "image":image,
    "address":address 

}

    return await axios.post(`${Url}/user/rationDonation`,obj);
}

export const moneyDonationUser =  async (email, ngoIdentifier, amount, cardNum) =>{
    const obj = {

    "email":email, 
    "ngoIdentifier": ngoIdentifier,
    "amount": amount,
    "cardNum": cardNum
}

    return await axios.post(`${Url}/user/moneyDonation`,obj);
}

//restaurant donation 

export const mealDonationRest =  async (address, description, email, ngoIdentifier, image) =>{
    const obj = {

    "email":email, 
    "description":description,
    "ngoIdentifier": ngoIdentifier,
    "image":image,
    "address":address 

}

    return await axios.post(`${Url}/rest/mealDonation`,obj);
}