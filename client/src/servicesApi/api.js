import axios from 'axios'

export const LogIn = async (Email, Password) => {

    const object = {
        "email" : Email,
        "password":Password
    }

    return await axios.post(`${Url}/userController/login`,object,{
        'Accept': 'application/json',
        'content-type':'application/json'

    });
}
