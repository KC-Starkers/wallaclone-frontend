import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  authLogin,
  uiResetError,
} from "../../../store/actions";
import { uiSelector } from "../../../store/selectors";
import "../style/index.css";

const Login = ({ onLogin, error, onErrorClose }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin({ loginData, navigate });
  };

  return (
    <div className="md:grid lg:grid-cols-5 md:grid-cols-4 h-screen w-screen bg-gradient-to-r from-cyan-500 to-blue-500 form-body">
      <div className="lg:col-span-3 md:col-span-2"></div>
      <div className="lg:col-span-2 md:col-span-2 flex justify-center content-center flex-col lg:p-5">
        <div className="text-center">Logo</div>
        <form
          onSubmit={handleSubmit}
          className="flex rouded-xl flex-col rounded-xl m-3 p-3 bg-slate-200 bg-opacity-70"
        >
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={loginData.username}
            className="rounded-full p-2 px-3 mt-0 mb-3 shadow-sm bg-white bg-opacity-0"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={loginData.password}
            className="rounded-full p-2 px-3 mt-0 mb-3 shadow-sm bg-white bg-opacity-0 transition-all"
          />
          <input
            type="submit"
            value="Acceder"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-t-xl bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:bg-yellow-500 cursor-pointer"
          />
          <Link
            to="/auth/registro"
            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-b-xl text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
          >
            registro
          </Link>
        </form>
        {error ? (
          <div
            className="bg-red-200 text-red-500 border-red-500 rounded-xl mx-3 p-3 text-center"
            onClick={onErrorClose}
          >
            {error.response.data.error}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return uiSelector(state);
};
const mapDispatchToProps = {
  onLogin: authLogin,
  onErrorClose: uiResetError,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
