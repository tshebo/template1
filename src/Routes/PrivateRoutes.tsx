import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../admin/Dashboard";
import LoggedIn from "../pages/LoggedIn";

//Displays only for logged in users
function PrivateRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logged-in" element={<LoggedIn />} />
      </Routes>
    </div>
  );
}

export default PrivateRoutes;
