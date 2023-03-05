import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://168.138.215.26:9000/',
    timeout: 5000,
})

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token')
    config.headers.access_token = token ? token : ''
    return config
})

export default instance
