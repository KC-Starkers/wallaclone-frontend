import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import { Provider } from "react-redux";
import configureStore from "./store";
import { createBrowserHistory } from "history";
import { configureClient } from "./client/client";

const accessToken = localStorage.getItem("token");
const history = createBrowserHistory();

configureClient(accessToken);

const store = configureStore(
  {
    auth: {
      logged: !!accessToken,
      token: accessToken,
    },
  },
  { history }
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} history={history}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
