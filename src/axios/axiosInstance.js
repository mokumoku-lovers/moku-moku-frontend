import axios from "axios";

const instance = axios.create({
    baseURL: 'http://168.138.215.26:9000/',
    timeout: 1000
});
  
export default instance