import axios from 'axios';

const Url = "http://localhost:8080/api/v1";

export const mealDonationUser =  async (address, description, email, ngoIdentifier, image) =>{
    console.log("image:",image);
    let formData = new FormData();
    formData.append( "email",email);
    formData.append("description", description);
    formData.append( "ngoIdentifier", ngoIdentifier);
    formData.append("address",JSON.stringify(address));
    formData.append("image",image)
    return await axios.post(`${Url}/user/mealDonation`,formData ,{ headers: {
        'Content-Type': 'multipart/form-data'
      }});
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
    console.log("image:",image);
    let formData = new FormData();
    formData.append( "email",email);
    formData.append("description", description);
    formData.append( "ngoIdentifier", ngoIdentifier);
    formData.append("address",JSON.stringify(address));
    formData.append("image",image)
    return await axios.post(`${Url}/rest/mealDonation`,formData ,{ headers: {
        'Content-Type': 'multipart/form-data'
      }});
}

export const findNgoUser =  async (_id) =>{
    const obj = {
    "_id":_id 
}
    return await axios.post(`${Url}/ngo/findNgoUser`,obj);
}

export const findNgoRest =  async (_id) =>{
    const obj = {

    "_id":_id 

}

    return await axios.post(`${Url}/ngo/findNgoRest`,obj);
}