import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import { Provider } from "react-redux";
import configureStore from "./store";
import { createBrowserHistory } from "history";

const accessToken = localStorage.getItem("token");
const userId = localStorage.getItem("userId");
const history = createBrowserHistory();

const store = configureStore(
  {
    auth: {
      logged: !!accessToken,
      accessToken: accessToken,
      userId: userId,
    }
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
