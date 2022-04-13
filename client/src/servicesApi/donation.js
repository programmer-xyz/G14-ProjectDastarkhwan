import axios from 'axios';

const Url = "http://localhost:8080/api/v1";

export const MealDonation =  async (address, description, email, ngoIdentifier, image) =>{
    const obj = {

    "email":email, 
    "description":description,
    "ngoIdentifier": ngoIdentifier,
    "image":image,
    "address":address 

}

    return await axios.post(`${Url}/user/moneyDonation`,obj);
}