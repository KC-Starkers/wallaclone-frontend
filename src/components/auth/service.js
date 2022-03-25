import axios from "axios";

//const path = process.env.REACT_APP_API_BASE_URL + "/auth/login";
const path = "http://localhost:3001/auth/login";

export const login = async (credentials) => {
  return axios.post(path, credentials).then((response) => {
    //const accessToken = response.data.accessToken;
    const accessToken = response.data.token;
    const userName = response.data.userName;
    localStorage.setItem("token", `${accessToken}`);
    localStorage.setItem("userName", `${userName}`);
    return {accessToken, userName};
  });
};

export const logout = () => {
  return localStorage.removeItem("Authorization");
};
