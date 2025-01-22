import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'https://fur-store-api.vercel.app',
})

export default apiInstance;