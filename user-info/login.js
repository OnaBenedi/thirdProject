import axios from 'axios';

const apiUrl = 'http://localhost:5173';

async function register (email, password){
    try{
        const response = await axios.post(`${apiUrl}/register`, {
            email,
            password,
        });
        return response.data; 
    }catch(error) {
        console.error(error);
    }
}

async function login(email, password) {
    try {
        const response = await axios.post(`${apiUrl}/login`, {
            email,
            password,
        });
        const token = response.data.token;
        return token;
    } catch (error) {
        console.error(error);
    }
}


export { register, login }