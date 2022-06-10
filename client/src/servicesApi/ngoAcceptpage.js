import axios from 'axios';


const Url = "http://localhost:8080/api/v1/ngo";

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

export const makeRequestNgo = async (ngoId) =>{
    let obj = {
        ngoId:ngoId    
   }
   console.log(obj)
   return await axios.post(`${Url}/viewDonation`,obj)
}

export const makeRequestNgoUser = async (ngoId) =>{
    let obj = {
        ngoId:ngoId    
   }
   console.log(obj)

   return await axios.post(`${Url}/viewUserDonation`,obj)
}

export const makeRequestRestNgo = async (ngoId) =>{
    let obj = {
        ngoId:ngoId    
   }
   console.log(obj)
   console.log(`${Url}/viewRestDonation`)

   return await axios.post(`${Url}/viewRestDonation`,obj)
}
