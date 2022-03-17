import axios from 'axios';

const baseURL = REACT_APP_API_BASE_URL;
const client = axios.create({ baseURL });

export default client;

