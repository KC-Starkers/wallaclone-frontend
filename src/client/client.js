import axios from "axios";

//TODO: agregar '/api' a REACT_APP_PI_BASE_URL en el .env cuando cambiemos la ruta del backend a "/api/adverts"


const baseURL = process.env.REACT_APP_API_BASE_URL;

const client = axios.create({ baseURL });

client.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

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