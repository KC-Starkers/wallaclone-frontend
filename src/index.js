import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Router from "./elements/Router";
import { Provider } from "react-redux";


//TODO: eliminar Root.js y App.js (que en wallaclone es Router.js)



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


