import axios from 'axios';

export const productoAxios = axios.create({
    baseURL: "http://localhost:8080/"
});
