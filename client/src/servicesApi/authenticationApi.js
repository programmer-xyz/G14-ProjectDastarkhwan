import axios from 'axios';

const Url = "http://localhost:8080/api/v1";

export const createAccountUser =  async (name,username,email,phoneNumber,password,cnic,city,country,streetNumber,houseNumber,Description) =>
{
    console.log("api url",process.env.REACT_APP_API_URL);
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
    
    let formData = new FormData();
    formData.append("name",name);
    formData.append("email",email);
    formData.append("phoneNumber",phoneNumber);
    const addrss = {
        "city":city,
        "country":country,
        "streetNumber":streetNumber,
        "houseNumber":houseNumber
    }
    formData.append("address",JSON.stringify(addrss))
    formData.append("password",paswword)
    formData.append("description",Description)
    formData.append("contactNum",contactNum)
    formData.append("contactName",contactName)
    formData.append("contactEmail",contactEmail)
    formData.append("accountNum",accountNum)
    formData.append( "userName",username)
    formData.append("verifyDoc",file)
    // const obj = {
    // "name":name, 
    // "email":email, 
    // "phoneNumber":phoneNumber, 
    // "password":paswword,
    // "address":{
    //     "city":city,
    //     "country":country,
    //     "streetNumber":streetNumber,
    //     "houseNumber":houseNumber
    // },
    // "description":Description, 
    // "contactNum":contactNum, 
    // "contactName":contactName, 
    // "contactEmail":contactEmail,
    // "accountNum":accountNum, 
    // "userName":username,
    // "verifyDoc":file
    // } 

    return await axios.post(`${Url}/ngo/register`,formData,{ headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
}

export const createRestUser = async (name,username,email,phoneNumber,paswword,city,country,streetNumber,houseNumber,contactNum,contactName,contactEmail,Description)=>
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
        "userName":username
        }
    return await axios.post(`${Url}/rest/register`,obj);
}

export const userLogin = async (email,password) =>
{
    const obj = 
    {
        "email":email, 
        "password":password
    }
    return await axios.post(`${Url}/user/login`,obj);
}
export const ngoLogin = async (email,password) =>
{
    const obj = 
    {
        "email":email, 
        "password":password
    }
    return await axios.post(`${Url}/ngo/login`,obj);
}
export const restLogin = async (email,password) =>
{
    const obj = 
    {
        "email":email, 
        "password":password
    }
    return await axios.post(`${Url}/rest/login`,obj);
}

export const checkLoggedIn = async (role) =>
{
    const obj = 
    {
        "role":role
    }
    return await axios.post(`${Url}/auth/isLoggedin`);
}
