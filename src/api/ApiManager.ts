import axios from "axios";

const ApiManager = axios.create({
    baseURL:'http://localhost:5555',
    responseType: 'json',
    withCredentials: true,
});

export default ApiManager;