import axios from 'axios';


const URL = 'https://tranquil-cove-46631.herokuapp.com';

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (error) {
        console.log("Error while calling signupo api", error)
    }
};

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    } catch (error) {
        console.log("Error while calling login api", error);
        return error.req;
    }
};
