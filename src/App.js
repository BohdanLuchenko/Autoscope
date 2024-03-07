import React, { Suspense } from "react";
import "./assets/scss/theme.scss";
import "./assets/css/app.less";

import { Route, Routes } from "react-router-dom";
import HomePage from "pages/home/HomePage";
import LoginPage from "pages/login/LoginPage";
import BlockedPage from "pages/blocked/BlockedPage";
import GetAppPage from "pages/getApp/GetAppPage";
import Legal from "pages/legal/Legal";
import AboutUs from "pages/aboutUs/AboutUs";

const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);
const App = () => (
  <Suspense fallback={<Loader />}>
    <Routes initialEntries={["/"]}>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/blocked" element={<BlockedPage />} />
      <Route path="/app" element={<GetAppPage />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  </Suspense>
);

export default App;
