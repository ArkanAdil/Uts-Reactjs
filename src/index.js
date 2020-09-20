import React from "react";
import ReactDOM from "react-dom";
import Home from "./kantin/Home";
import "./styles.css";

// import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  rootElement
);
