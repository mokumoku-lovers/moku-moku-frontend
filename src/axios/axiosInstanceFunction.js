import axios from 'axios'

const myInstance = (url) => {
    const instance = axios.create({
        baseURL: url,
        timeout: 5000,
    })
    
    instance.interceptors.request.use(function (config) {
        const token = localStorage.getItem('token');
        config.headers.access_token =  token ? token : '';
        return config;
    });

    return instance
}

export default myInstance