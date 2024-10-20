import axios from "axios";

const Api = axios.create({
    baseURL:'http://localhost:5555',
    responseType: 'json',
    withCredentials: true,
});

export default Api;