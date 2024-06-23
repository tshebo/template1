import { useState } from "react";
import AppRoutes from "./Routes/AppRoutes";
import { AuthProvider } from "./AuthContext/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
