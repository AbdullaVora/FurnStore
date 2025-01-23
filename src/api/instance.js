import axios from 'axios';

const apiInstance = axios.create({
    // baseURL: 'https://fur-store-api.vercel.app',
    baseURL: 'https://furstore-api.onrender.com',
    withCredentials: true
})

export default apiInstance;