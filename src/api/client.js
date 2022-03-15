import axios from 'axios'

const client = axios.create({
    baseURL: `http://3.225.90.239:3001`,
  });
  
export default client