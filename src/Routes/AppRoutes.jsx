import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes"; // Ensure this is imported

// Add routing conditions 
export default function AppRoutes() {
  const [user, setUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);  

  return (
    <div>
      <BrowserRouter>
        {
          !user ? (
            <PublicRoutes />
          ) : (
            isAdmin ? <AdminRoutes /> : <PrivateRoutes />
          )
        }
      </BrowserRouter>
    </div>
  );
}
