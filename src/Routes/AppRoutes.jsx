import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
        {true ? <PublicRoutes /> : <PrivateRoutes />}
      </BrowserRouter>
    </div>
  );
}
