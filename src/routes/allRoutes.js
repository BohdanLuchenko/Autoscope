import React from "react";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import { Navigate } from "react-router-dom";
import BlockedPage from "pages/blocked/BlockedPage";
import GetAppPage from "pages/getApp/GetAppPage";
import Legal from "pages/legal/Legal";
import AboutUs from "pages/aboutUs/AboutUs";

const routes = [
  { path: "/home", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "/blocked", component: BlockedPage },
  { path: "/app", component: GetAppPage },
  { path: "/legal", component: Legal },
  { path: "/about", component: AboutUs },
  { path: "/", exact: true, component: () => <Navigate to="/home" /> },
];

export { routes };
