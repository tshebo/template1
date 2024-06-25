import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../admin/Dashboard";
import LoggedIn from "../pages/LoggedIn";
import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
//Displays only for logged in users
function PrivateRoutes() {
  const currentUser = useAuth();
  const navigate = useNavigate();
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logged-in" element={<LoggedIn />} />
        <Route path="*" element={<LoggedIn />} />
      </Routes>
    </div>
  );
}

export default PrivateRoutes;
