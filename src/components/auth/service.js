import axios from "axios";

const path = process.env.REACT_APP_API_BASE_URL + "/auth/signin";

export const login = async (credentials) => {
  return axios.post(path, credentials).then((response) => {
    const accessToken = response.data.token;     
    localStorage.setItem("token", `${accessToken}`);
    return accessToken;
  });
};

export const logout = () => {
  return localStorage.removeItem("Authorization");
};
