import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../../../store/actions";
import { uiSelector } from "../../../store/selectors";

const Login = ({onLogin, loading, error, onErrorClose}) => {

  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) =>{
    event.preventDefault()
    onLogin({loginData, navigate})
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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

const mapStateToProps = uiSelector
const mapDispatchToProps = {onLogin: authLogin}

export default connect(mapStateToProps, mapDispatchToProps)(Login)