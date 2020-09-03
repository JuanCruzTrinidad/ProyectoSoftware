import axios from 'axios';

const productoAxios = axios.create({
    baseURL: "http://localhost:8080/api/v1/"
});

export default productoAxios;