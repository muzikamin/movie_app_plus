import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Router";
import { GlobalStyled } from "./GlobalStyled";
import { Header } from "./Components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <Router />
  </React.StrictMode>
);
