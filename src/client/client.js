import axios from "axios";

//TODO: agregar '/api' a REACT_APP_PI_BASE_URL en el .env cuando cambiemos la ruta del backend a "/api/adverts"

const baseURL = 'http://localhost:3001';
//const baseURL = 'http://3.225.90.239:3001';

const client = axios.create({ baseURL });

const setAuthorizationHeader = token => {
  client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common['Authorization'];
};

client.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const configureClient = ({ accessToken }) => {
  if (accessToken) {
    setAuthorizationHeader(accessToken);
  }
};

export const resetClient = () => {
  removeAuthorizationHeader();
};


export default client;


// client.interceptors.response.use(
//     response => response.data,
//     error => {
//       if (!error.response) {
//         return Promise.reject({ message: error.message });
//       }
//       return Promise.reject({
//         message: error.response.statusText,
//         statusCode: error.response.status,
//         ...error.response.data,
//       });
//     },
//   );