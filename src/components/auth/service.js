import axios from "axios";

const path = process.env.REACT_APP_API_BASE_URL + "/auth/signin";

export const login = async (credentials) => {
  return axios.post(path, credentials).then((response) => {
    const getData = response.data
    const userData = {
      token: getData.token,
      userId: getData.userId
    }
    localStorage.setItem("token", `${userData.token}`);
    localStorage.setItem("userId", `${userData.userId}`);
    return userData;
  });
};

export const logout = () => {
  return localStorage.removeItem("Authorization");
};
