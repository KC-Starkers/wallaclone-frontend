import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleSbumit = async (event) => {
    event.preventDefault();
    const url = process.env.REACT_APP_API_BASE_URL + "/auth/login";

    try {
      const sendForm = await axios.post(url, loginData);
      const accessToken = sendForm.data.accessToken;
      localStorage.setItem("Authorization", `Bearer ${accessToken}`);
      return navigate('/')
    } catch (error) {
      console.log('usuario/contraseña no válidos');
    }
  };

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSbumit}>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={loginData.username}
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={loginData.password}
        />
        <input type="submit" value="Acceder" />
      </form>
    </>
  );
};

export default Login;
