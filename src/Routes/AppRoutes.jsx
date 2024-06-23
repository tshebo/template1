import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes"; 
import { useAuth } from "../AuthContext/AuthContext";

// Add routing conditions
export default function AppRoutes() {
  const { currentUser, isAdmin } = useAuth();

  return (
    <div>
      <Router>
        {!currentUser ? (
          <PublicRoutes />
        ) : isAdmin ? (
          <AdminRoutes />
        ) : (
          <PrivateRoutes />
        )}
      </Router>
    </div>
  );
}
