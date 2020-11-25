import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:50818/api"
});

export default api;