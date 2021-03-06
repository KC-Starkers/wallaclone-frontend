import axios from "axios";



const baseURL = process.env.REACT_APP_API_BASE_URL;

const client = axios.create({ baseURL });

const setAuthorizationHeader = (token) => {
  client.defaults.headers.common["Authorization"] = `${token}`;
};

const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common["Authorization"];
};

client.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const configureClient = (accessToken) => {
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
