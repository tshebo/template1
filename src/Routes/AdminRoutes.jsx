import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminHome from "../admin/AdminHome";

function AdminRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminHome />} />
      </Routes>
    </div>
  );
}

export default AdminRoutes;
