import axios from 'axios';

const Url = process.env.API_URL;
export const createAccountUser =  async (name,username,email,phoneNumber,password,cnic,city,country,streetNumber,houseNumber,Description) =>
{
    const obj = {"name":name, 
    "email":email, 
    "phoneNumber":phoneNumber, 
    "password":password,
    "description":Description,
    "userName":username,
    "address":{
        "city":city,
        "country":country,
        "streetNumber":streetNumber,
        "houseNumber":houseNumber
    }, 
    "CNIC":cnic}
    return await axios.post(`${Url}/user/register`,obj);
}

export const createNgoUser =  async (name,username,email,phoneNumber,paswword,city,country,streetNumber,houseNumber,contactNum,contactName,contactEmail,accountNum,Description,file) =>
{
    const obj = {
    "name":name, 
    "email":email, 
    "phoneNumber":phoneNumber, 
    "password":paswword,
    "address":{
        "city":city,
        "country":country,
        "streetNumber":streetNumber,
        "houseNumber":houseNumber
    },
    "description":Description, 
    "contactNum":contactNum, 
    "contactName":contactName, 
    "contactEmail":contactEmail,
    "accountNum":accountNum, 
    "userName":username,
    "verifyDoc":file
    } 

    return await axios.post(`${Url}/ngo/register`,obj,{ headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
}

export const createRestUser = async (name,username,email,phoneNumber,paswword,city,country,streetNumber,houseNumber,contactNum,contactName,contactEmail,accountNum,Description)=>
{
    const obj = {
        "name":name, 
        "email":email, 
        "phoneNumber":phoneNumber, 
        "password":paswword,
        "address":{
            "city":city,
            "country":country,
            "streetNumber":streetNumber,
            "houseNumber":houseNumber
        },
        "description":Description, 
        "contactNum":contactNum, 
        "contactName":contactName, 
        "contactEmail":contactEmail,
        "accountNum":accountNum, 
        "userName":username
        }
    return await axios.post(`${Url}/rest/register`,obj,{ headers: {
            'Content-Type': 'multipart/form-data'
          }
    });
}
