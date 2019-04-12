import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-api.herokuapp.com',
});

export default api;