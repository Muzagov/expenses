import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./redux/configureStore";
import "material-design-icons/iconfont/material-icons.css";
import "./styles.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
