import axios from 'axios';

const axiosInstance  = axios.create({
    baseURL:'https://burger-e6ee9.firebaseio.com/'
})

export default axiosInstance;