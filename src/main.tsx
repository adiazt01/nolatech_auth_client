import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./views/LandingPage";
import { RegisterPage } from "./views/RegisterPage";
import { LoginPage } from "./views/LoginPage";
import { DashboardPage } from "./views/DashboardPage";
import { App } from "./App";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);
