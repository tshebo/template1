import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
function PrivateRoutes() {
  return (
    <div>
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default PrivateRoutes;
